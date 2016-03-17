package com.nwsuaf.insect.model.query;

import java.util.List;

import lombok.Data;

import com.nwsuaf.insect.model.InsectCateUserRole;

@Data
public class InsectCateUserRoleQuery extends InsectCateUserRole {

	private String roleName;

	private boolean enableEdit; // 是否可以修改

	private boolean enableDelete; // 是否可以删除

	private List<Integer> categoryIds;

	// 权限范围显示清单
	private List<ShowLablel> cateRangList;
}
