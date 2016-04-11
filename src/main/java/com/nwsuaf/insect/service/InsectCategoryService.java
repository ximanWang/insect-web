package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.ErrorLog;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.InsectOprData;
import com.sun.tools.internal.xjc.reader.xmlschema.bindinfo.BIConversion.User;

/**
 * 昆虫类目服务接口
 * 
 * @author ximan
 *
 */
public interface InsectCategoryService {
	
	/**
	 * 获取类目树
	 * @param categoryIds
	 * @param isRoot
	 * @return
	 */
	List<InsectCategoryQuery> getInsectCategoryTree(List<Integer> categoryIds, boolean isRoot);
	
	/**
	 * 处理操作
	 * @param insectOprData 操作对象集合
	 * @return
	 * @throws InsectException 
	 */
	void addProcess(InsectOprData insectOprData) throws InsectException;
	
	/**
	 * 加载频道列表
	 * @return
	 */
	List<InsectCategoryQuery> getAncestorList(Integer parentId);
	
	/**
	 * 获取类目清单
	 * @return
	 */
	List<InsectCategoryQuery> getFlatCategoryList();

}
