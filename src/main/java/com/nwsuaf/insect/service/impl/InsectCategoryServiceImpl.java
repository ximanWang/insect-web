package com.nwsuaf.insect.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nwsuaf.insect.enums.OprTypeEnum;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.ErrorLog;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.InsectOprData;
import com.nwsuaf.insect.model.query.InsectOprQuery;
import com.nwsuaf.insect.service.InsectCategoryBizService;
import com.nwsuaf.insect.service.InsectCategoryService;

@Service("InsectCategoryService")
public class InsectCategoryServiceImpl implements InsectCategoryService {
	
	@Autowired
	private InsectCategoryBizService insectCategoryBizService;
	@Autowired
	private InsectCategoryMapper insectCategoryMapper;
	
	/**
	 *根据类目集合id查询所有的类目树
	 */
	public List<InsectCategoryQuery> getInsectCategoryTree(
			List<Integer> categoryIds, boolean isRoot) {
		Map<Integer, List<InsectCategoryQuery>> cateMap = insectCategoryBizService.getAllInsectCategoriesGroupByParentId();
		List<InsectCategoryQuery> categories = insectCategoryBizService.buildCategoryTree(0, categoryIds, cateMap, false, isRoot);
		return categories;
	}
	
	public List<ErrorLog> addProcess(InsectOprData insectOprData) throws InsectException {
		
		// 先校验参数的合法性
		insectCategoryBizService.validateOprJsonData(insectOprData);
		for (InsectOprQuery insectOprQuery : insectOprData.getInsectOprs()) {
			if(insectOprQuery.getOprType().equals(OprTypeEnum.UPD_CATE_NAME.val())){
				insectCategoryBizService.updateCataName(insectOprQuery);
			}
			if(insectOprQuery.getOprType().equals(OprTypeEnum.DEL_CATE.val())){
				insectCategoryBizService.delCate(insectOprQuery);
			}
		}
		return null;
	}

}
