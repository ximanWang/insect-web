package com.nwsuaf.insect.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.ErrorLog;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.InsectOprData;
import com.nwsuaf.insect.model.query.InsectOprQuery;


public interface InsectCategoryBizService {
	/**
     * 根据parentId分组获取对应类目的MAP
     * @return
     */
    public Map<Integer, List<InsectCategoryQuery>> getAllInsectCategoriesGroupByParentId();
    
    /**
     * 遍历Insects类目树
     * 
     * @param parentId
     * @param categoryIds
     * @param privilege
     * @return
     */
    public List<InsectCategoryQuery> buildCategoryTree(Integer parentId, List<Integer> categoryIds,
            Map<Integer, List<InsectCategoryQuery>> caegoryMap, boolean privilege, boolean isRoot);
    
    /**
     * 校验参数的合法性
     * @param insectOprData
     * @throws InsectException
     */
    public void validateOprJsonData(InsectOprData insectOprData) throws InsectException;
    

	/**
	 * 获取族谱
	 * 
	 * @param id
	 * @return
	 */
	List<InsectCategory> getParents(Integer id);
    
    /**
	 * 添加类目
	 * 
	 * @param insectCategory
	 * @return
	 */
	Integer insertCategory(InsectCategory insectCategory, Integer parentId);
    
    /**
     * 更新类目名称
     * @param insectOprQuery
     * @throws InsectException
     */
    public void updateCataName(InsectOprQuery insectOprQuery) throws InsectException;
    
    /**
     * 删除类目
     * @param insectOprQuery
     * @return
     * @throws InsectException
     */
    public List<ErrorLog> delCate(InsectOprQuery insectOprQuery) throws InsectException;

    /**
     * 根据频道类目获取扁平的子类目清单
     * @param ancestorId
     * @param arrayList
     * @param isRootUser
     * @return
     */
	public List<InsectCategoryQuery> getFlatCategoryListByAncestor(int ancestorId,
			ArrayList<Integer> arrayList, boolean isRootUser);
	
	/**
	 * 在类目树上新增类目
	 * @param insectOprQuery
	 */
	public void addCate(InsectOprQuery insectOprQuery);
}
