package com.nwsuaf.insect.model.query;

import java.util.List;

import com.nwsuaf.insect.model.InsectCategory;

public class InsectCategoryQuery extends InsectCategory {

	private List<InsectCategoryQuery> children; // 子类目集合

	private boolean privilege; // 是否有操作权限

	public List<InsectCategoryQuery> getChildren() {
		return children;
	}

	public void setChildern(List<InsectCategoryQuery> children) {
		this.children = children;
	}

	public boolean isPrivilege() {
		return privilege;
	}

	public void setPrivilege(boolean privilege) {
		this.privilege = privilege;
	}

}
