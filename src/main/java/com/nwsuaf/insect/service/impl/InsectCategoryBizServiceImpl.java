package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSON;
import com.nwsuaf.insect.enums.OprTypeEnum;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.mapper.InsectMapper;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.ErrorLog;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.InsectOprData;
import com.nwsuaf.insect.model.query.InsectOprQuery;
import com.nwsuaf.insect.model.query.OprJsonData;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectCategoryBizService;
import com.nwsuaf.insect.service.InsectCategoryService;

@Service("InsectCategoryBizService")
public class InsectCategoryBizServiceImpl implements InsectCategoryBizService {

	@Autowired
	private InsectCategoryMapper insectCategoryMapper;
	@Autowired
	InsectCategoryService insectCategoryService;

	@Autowired
	private InsectMapper insectMapper;

	public Map<Integer, List<InsectCategoryQuery>> getAllInsectCategoriesGroupByParentId() {
		Map<Integer, List<InsectCategoryQuery>> cateMap = new TreeMap<Integer, List<InsectCategoryQuery>>();
		List<InsectCategoryQuery> categories = insectCategoryMapper.selectAllInsectCategories();

		for (InsectCategoryQuery category : categories) {
			if (cateMap.containsKey(category.getParentId())) {
				cateMap.get(category.getParentId()).add(category);
			} else {
				List<InsectCategoryQuery> subCategories = new ArrayList<InsectCategoryQuery>();
				subCategories.add(category);
				cateMap.put(category.getParentId(), subCategories);
			}
		}
		return cateMap;
	}

	public List<InsectCategoryQuery> buildCategoryTree(Integer parentId, List<Integer> categoryIds,
			Map<Integer, List<InsectCategoryQuery>> caegoryMap, boolean privilege, boolean isRoot) {
		List<InsectCategoryQuery> categories = caegoryMap.get(parentId);
		for (InsectCategoryQuery category : categories) {
			boolean flag = privilege || isRoot;
			if (!flag) {
				flag = categoryIds.contains(category.getCategoryId());
			}
			category.setPrivilege(flag);
			if (category.getIsLeaf() == 0) {
				category.setChildren(buildCategoryTree(category.getCategoryId(), categoryIds,
						caegoryMap, flag, isRoot));
			}
		}

		return categories;
	}

	public void validateOprJsonData(InsectOprData insectOprData) throws InsectException {
		for (InsectOprQuery insectOprQuery : insectOprData.getInsectOprs()) {
			OprJsonData operJsonData = JSON.parseObject(insectOprQuery.getOprData(),
					OprJsonData.class);
			if (insectOprQuery.getOprType().equals(OprTypeEnum.UPD_CATE_NAME.val())) {
				if (operJsonData.getCategoryId() == null)
					throw new InsectException("需要修改的类目id为空");
				if (!StringUtils.hasText(operJsonData.getNewCategoryName()))
					throw new InsectException("修改的新类目名称为空");
			}
			if (insectOprQuery.getOprType().equals(OprTypeEnum.DEL_CATE.val())) {
				if (operJsonData.getCategoryId() == null)
					throw new InsectException("需要删除的类目id为空");
			}
		}
	}

	public List<InsectCategory> getParents(Integer id) {
		List<InsectCategory> insectCateList = insectCategoryMapper.getParents(id);
		// 去掉ROOT
		insectCateList.remove(0);
		return insectCateList;
	}

	@Transactional
	public void updateCataName(InsectOprQuery insectOprQuery, HttpServletRequest request)
			throws InsectException {
		OprJsonData oprJsonData = JSON.parseObject(insectOprQuery.getOprData(), OprJsonData.class);
		InsectCategory insectCategory = insectCategoryMapper.selectByPrimaryKey(oprJsonData
				.getCategoryId());
		insectCategory.setCategoryName(oprJsonData.getNewCategoryName());

		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		insectCategory.setUpdateUser(userq.getUserName());
		insectCategoryMapper.updateByPrimaryKeySelective(insectCategory);

		// 修改Insect详情表中信息
		Insect insect = insectMapper.selectByCategoryId(oprJsonData.getCategoryId());
		if (insect != null) {
			insectMapper.updateByPrimaryKeySelective(insect);
		}
		// TODO 修改害虫表中信息
	}

	@Transactional
	public List<ErrorLog> delCate(InsectOprQuery insectOprQuery) throws InsectException {
		// TODO delCate
		OprJsonData oprJsonData = JSON.parseObject(insectOprQuery.getOprData(), OprJsonData.class);
		InsectCategory insectCategory = insectCategoryMapper.selectByPrimaryKey(oprJsonData
				.getCategoryId());
		return null;
	}

	@Transactional
	public Integer insertCategory(InsectCategory insectCategory, Integer parentId) {
		InsectCategory insectParent = insectCategoryMapper.selectByPrimaryKey(parentId);
		insectCategory.setParentId(parentId);
		insectCategory.setLft(insectParent.getRgt());
		insectCategory.setRgt(insectParent.getRgt() + 1);
		insectCategory.setCategoryLevel(insectParent.getCategoryLevel() + 1);
		insectCategoryMapper.updateRightData(insectParent.getRgt());
		Integer result = insectCategoryMapper.insert(insectCategory);
		return result;
	}

	@Override
	public List<InsectCategoryQuery> getFlatCategoryListByAncestor(int ancestorId,
			ArrayList<Integer> categoryRangIds, boolean isRootUser) {
		// 类目清单
		List<InsectCategoryQuery> flatCateList = new ArrayList<InsectCategoryQuery>();
		// 是否有权限
		boolean privilege = false;

		// 如果频道层有权限，则设为true
		if (categoryRangIds.contains(ancestorId) || isRootUser)
			privilege = true;

		// 非root节点，需要加上当前频道类目信息
		if (ancestorId != 0 && ancestorId != -1) {
			InsectCategoryQuery insectCategory = insectCategoryMapper
					.selectByCategoryId(ancestorId);
			if (insectCategory == null) {
				throw new InsectException("The ancestor isn't exist. ancestorId:" + ancestorId);
			}
			// 如果频道层有权限，则设为true
			if (categoryRangIds.contains(ancestorId) || isRootUser)
				privilege = true;

			// 修改类目名称，用于页面展示
			flatCateList.add(updCategory(insectCategory, privilege));
		}
		flatCateList.addAll(buildFlatCateList(getAllInsectCategoriesGroupByParentId(), ancestorId,
				categoryRangIds, privilege));
		return flatCateList;
	}

	private List<InsectCategoryQuery> buildFlatCateList(
			Map<Integer, List<InsectCategoryQuery>> allCateMap, int parentId,
			ArrayList<Integer> categoryRangIds, boolean flag) {
		// 显示的子类目清单
		List<InsectCategoryQuery> flatChildrenCateList = new ArrayList<InsectCategoryQuery>();

		// 处理前的子类目清单
		List<InsectCategoryQuery> childrenCateList = allCateMap.get(parentId);

		// 判断处理前的子类目清单是否为空
		if (childrenCateList != null && !childrenCateList.isEmpty()) {

			for (InsectCategoryQuery childrenCate : childrenCateList) {

				boolean privilege = flag;
				if (!privilege) {
					privilege = categoryRangIds.contains(childrenCate.getCategoryId());
				}

				// 将修改后的类目添加到显示清单中
				flatChildrenCateList.add(updCategory(childrenCate, privilege));

				// 递归获取该子类目的子类目显示清单，即孙子类目显示清单
				List<InsectCategoryQuery> flatGrandChildrenCateList = buildFlatCateList(allCateMap,
						childrenCate.getCategoryId(), categoryRangIds, privilege);

				// 如果不为空，则添加到总的显示清单中
				if (flatGrandChildrenCateList != null && !flatGrandChildrenCateList.isEmpty()) {

					flatChildrenCateList.addAll(flatGrandChildrenCateList);
				}
			}
		}
		return flatChildrenCateList;
	}

	private InsectCategoryQuery updCategory(InsectCategoryQuery category, boolean privilege) {
		// 修改子类目名称，用于页面展示
		String newCategoryName = getPrefix(category.getCategoryLevel())
				+ category.getCategoryName();

		// 重新设置类目
		category.setCategoryName(newCategoryName);

		category.setPrivilege(privilege);

		return category;
	}

	/**
	 * 获取类目名称显示前缀
	 * 
	 * @param level
	 * @return
	 */
	private static String getPrefix(int level) {

		StringBuffer prefix = new StringBuffer();

		for (int i = 0; i < level; i++) {

			prefix.append(" — ");
		}

		return prefix.toString();
	}

	@Override
	@Transactional
	public void addCate(InsectOprQuery insectOprQuery, HttpServletRequest request) {
		OprJsonData oprJsonData = JSON.parseObject(insectOprQuery.getOprData(), OprJsonData.class);
		Integer parentId = oprJsonData.getCategoryId();
		InsectCategory insectCategory = new InsectCategory();
		insectCategory.setCategoryName(oprJsonData.getNewCategoryName());

		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		insectCategory.setAddUser(userq.getUserName());
		insectCategory.setUpdateUser(userq.getUserName());

		insectCategoryService.addCategory(insectCategory, parentId);

	}
}
