package com.nwsuaf.insect.model.query;

import java.util.List;

import lombok.Data;

import com.nwsuaf.insect.model.InsectPestCategory;

public class PestCategoryQuery extends InsectPestCategory{
	
	private List<PestCategoryQuery> childern; // 子类目集合
	
	private boolean privilege; // 权限

	public List<PestCategoryQuery> getChildern() {
		return childern;
	}

	public void setChildern(List<PestCategoryQuery> childern) {
		this.childern = childern;
	}

	public boolean isPrivilege() {
		return privilege;
	}

	public void setPrivilege(boolean privilege) {
		this.privilege = privilege;
	}
}
