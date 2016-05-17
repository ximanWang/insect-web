package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSON;
import com.nwsuaf.insect.enums.OprTypeEnum;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.PestCategoryMapper;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.PestCategory;
import com.nwsuaf.insect.model.query.ErrorLog;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.InsectOprData;
import com.nwsuaf.insect.model.query.InsectOprQuery;
import com.nwsuaf.insect.model.query.OprJsonData;
import com.nwsuaf.insect.model.query.PestCategoryQuery;
import com.nwsuaf.insect.service.pest.PestCategoryBizService;

@Service("PestCategoryBizService")
public class PestCategoryBizServiceImpl implements PestCategoryBizService {

	@Autowired
	private PestCategoryMapper pestCategoryMapper;

	@Override
	public Map<Integer, List<PestCategoryQuery>> getAllInsectCategoriesGroupByParentId() {
		Map<Integer, List<PestCategoryQuery>> cateMap = new TreeMap<Integer, List<PestCategoryQuery>>();
		List<PestCategoryQuery> categories = pestCategoryMapper.selectAllInsectCategories();

		for (PestCategoryQuery category : categories) {
			if (cateMap.containsKey(category.getParentId())) {
				cateMap.get(category.getParentId()).add(category);
			} else {
				List<PestCategoryQuery> subCategories = new ArrayList<PestCategoryQuery>();
				subCategories.add(category);
				cateMap.put(category.getParentId(), subCategories);
			}
		}
		return cateMap;
	}

	@Override
	public List<PestCategoryQuery> buildCategoryTree(Integer parentId, List<Integer> categoryIds,
			Map<Integer, List<PestCategoryQuery>> caegoryMap, boolean privilege, boolean isRoot) {
		List<PestCategoryQuery> categories = caegoryMap.get(parentId);
		for (PestCategoryQuery category : categories) {
			boolean flag = privilege || isRoot;
			if (!flag) {
				flag = categoryIds.contains(category.getCategoryId());
			}
			category.setPrivilege(flag);
			if (category.getIsLeaf() == 0) {
				category.setChildern(buildCategoryTree(category.getCategoryId(), categoryIds,
						caegoryMap, flag, isRoot));
			}
		}

		return categories;
	}

	@Override
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

	@Override
	public List<PestCategory> getParents(Integer id) {
		List<PestCategory> pestCateList = pestCategoryMapper.getParents(id);
		// 去掉ROOT
		pestCateList.remove(0);
		return pestCateList;
	}

	@Override
	public Integer insertCategory(PestCategory pestCategory, Integer parentId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateCataName(InsectOprQuery insectOprQuery, HttpServletRequest request)
			throws InsectException {
		// TODO Auto-generated method stub

	}

	@Override
	public List<ErrorLog> delCate(InsectOprQuery insectOprQuery) throws InsectException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PestCategoryQuery> getFlatCategoryListByAncestor(int ancestorId,
			ArrayList<Integer> categoryRangIds, boolean isRootUser) {
		// 类目清单
		List<PestCategoryQuery> flatCateList = new ArrayList<PestCategoryQuery>();
		// 是否有权限
		boolean privilege = false;

		// 如果频道层有权限，则设为true
		if (categoryRangIds.contains(ancestorId) || isRootUser)
			privilege = true;

		// 非root节点，需要加上当前频道类目信息
		if (ancestorId != 0 && ancestorId != -1) {
			PestCategoryQuery pestCategory = pestCategoryMapper.selectByCategoryId(ancestorId);
			if (pestCategory == null) {
				throw new InsectException("The ancestor isn't exist. ancestorId:" + ancestorId);
			}
			// 如果频道层有权限，则设为true
			if (categoryRangIds.contains(ancestorId) || isRootUser)
				privilege = true;

			// 修改类目名称，用于页面展示
			flatCateList.add(updCategory(pestCategory, privilege));
		}
		flatCateList.addAll(buildFlatCateList(getAllInsectCategoriesGroupByParentId(), ancestorId,
				categoryRangIds, privilege));
		return flatCateList;
	}

	private List<PestCategoryQuery> buildFlatCateList(
			Map<Integer, List<PestCategoryQuery>> allCateMap, int parentId,
			ArrayList<Integer> categoryRangIds, boolean flag) {
		// 显示的子类目清单
		List<PestCategoryQuery> flatChildrenCateList = new ArrayList<PestCategoryQuery>();

		// 处理前的子类目清单
		List<PestCategoryQuery> childrenCateList = allCateMap.get(parentId);

		// 判断处理前的子类目清单是否为空
		if (childrenCateList != null && !childrenCateList.isEmpty()) {

			for (PestCategoryQuery childrenCate : childrenCateList) {

				boolean privilege = flag;
				if (!privilege) {
					privilege = categoryRangIds.contains(childrenCate.getCategoryId());
				}

				// 将修改后的类目添加到显示清单中
				flatChildrenCateList.add(updCategory(childrenCate, privilege));

				// 递归获取该子类目的子类目显示清单，即孙子类目显示清单
				List<PestCategoryQuery> flatGrandChildrenCateList = buildFlatCateList(allCateMap,
						childrenCate.getCategoryId(), categoryRangIds, privilege);

				// 如果不为空，则添加到总的显示清单中
				if (flatGrandChildrenCateList != null && !flatGrandChildrenCateList.isEmpty()) {

					flatChildrenCateList.addAll(flatGrandChildrenCateList);
				}
			}
		}
		return flatChildrenCateList;
	}

	private PestCategoryQuery updCategory(PestCategoryQuery category, boolean privilege) {
		// 修改子类目名称，用于页面展示
		String newCategoryName = getPrefix(category.getCategoryLevel())
				+ category.getCategoryName();

		// 重新设置类目
		category.setCategoryName(newCategoryName);

		category.setPrivilege(privilege);

		return category;
	}

	private String getPrefix(Integer level) {
		StringBuffer prefix = new StringBuffer();

		for (int i = 0; i < level; i++) {

			prefix.append(" — ");
		}

		return prefix.toString();
	}

	@Override
	public void addCate(InsectOprQuery insectOprQuery, HttpServletRequest request) {
		// TODO Auto-generated method stub

	}

}
