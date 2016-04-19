package com.nwsuaf.insect.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.InsectOprData;

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
	void addProcess(InsectOprData insectOprData, HttpServletRequest request) throws InsectException;
	
	/**
	 * 添加一个类目
	 * @param insectCategory
	 * @param parentId
	 * @throws InsectException
	 */
	void addCategory(InsectCategory insectCategory, Integer parentId) throws InsectException;
	
	/**
	 * 加载频道列表
	 * @return
	 */
	List<InsectCategoryQuery> getAncestorList();
	
	/**
     * 获取类目清单
     * @return
     */
	List<InsectCategoryQuery> getFlatCategoryList();
	
	/**
	 * 根据频道类目ID获取类目清单
	 * @return
	 */
	List<InsectCategoryQuery> getFlatCategoryList(Integer ancestorId);
	
	/**
     * 根据频道类目ID获取该频道下的扁平类目清单
     * @param ancestorId
     * @return
     */
    public List<InsectCategoryQuery> getFlatCategoryLisByAncestorId(int ancestorId, boolean isRootUser)  throws InsectException;
    
}
