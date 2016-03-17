package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.service.TreeBuilderService;

@Service("TreeBuilderService")
public class TreeBuilderServiceImpl implements TreeBuilderService {

	public String buildInsectTree(List<InsectCategoryQuery> insectCategorys) {

		StringBuilder sb = new StringBuilder();
		for (InsectCategoryQuery insectCategoryQuery : insectCategorys) {
			if (insectCategoryQuery.getChildren().size() == 0
					|| insectCategoryQuery.getChildren() == null
					|| insectCategoryQuery.getIsLeaf() == 1) {
				sb.append("<li oprStatus='").append(
						insectCategoryQuery.isPrivilege());
				sb.append("' isMain='").append(true);
				sb.append("' id='").append(insectCategoryQuery.getCategoryId());
				sb.append("'>").append(insectCategoryQuery.getCategoryName());
				sb.append("</li>");
			} else {
				sb.append("<li oprStatus='").append(
						insectCategoryQuery.isPrivilege());
				sb.append("' isMain='").append(true);
				sb.append("' id='").append(insectCategoryQuery.getCategoryId());
				sb.append("'>").append(insectCategoryQuery.getCategoryName());
				sb.append("<ul>");
				sb.append(buildInsectTree(insectCategoryQuery.getChildren()));
				sb.append("</ul>");
				sb.append("</li>");
			}
		}

		return sb.toString();
	}

}
