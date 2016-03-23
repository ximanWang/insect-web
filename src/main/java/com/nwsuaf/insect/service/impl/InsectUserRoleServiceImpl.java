package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nwsuaf.insect.enums.RoleType;
import com.nwsuaf.insect.enums.UserRoleEnum;
import com.nwsuaf.insect.model.query.InsectCateUserRoleQuery;
import com.nwsuaf.insect.service.InsectUserRoleService;

@Service("InsectUserRoleService")
public class InsectUserRoleServiceImpl implements InsectUserRoleService {

	public List<Integer> getBackCategoryIds(
			List<InsectCateUserRoleQuery> insectCateUserRoles) {
		List<Integer> categoryIds = new ArrayList<Integer>();
		for (InsectCateUserRoleQuery insectCateUserRole : insectCateUserRoles) {
			if (RoleType.BACK.name().equals(insectCateUserRole.getRoleType())
					&& UserRoleEnum.BACK_CATE.getRoleCode().equals(
							insectCateUserRole.getRoleCode())
					|| UserRoleEnum.BACK_PRO.getRoleCode().equals(
							insectCateUserRole.getRoleCode())
					|| UserRoleEnum.BACK_CATE_PRO.getRoleCode().equals(
							insectCateUserRole.getRoleCode())) {
				categoryIds.addAll(insectCateUserRole.getCategoryIds());
			}
		}
		return categoryIds;

	}

}
