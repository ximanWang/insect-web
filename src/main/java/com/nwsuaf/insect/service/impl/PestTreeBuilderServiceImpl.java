package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nwsuaf.insect.model.query.PestCategoryQuery;
import com.nwsuaf.insect.service.PestTreeBuilderService;

@Service("PestTreeBuilderService")
public class PestTreeBuilderServiceImpl implements PestTreeBuilderService{

	@Override
	public String buildPestTree(List<PestCategoryQuery> pestCategoryQuerys) {
		StringBuilder sb = new StringBuilder();
		for (PestCategoryQuery PestCategoryQuery : pestCategoryQuerys) {
			if (PestCategoryQuery.getIsLeaf() == 1) {
				sb.append("<li oprStatus='").append(
						PestCategoryQuery.isPrivilege());
				sb.append("' isMain='").append(true);
				sb.append("' id='").append(PestCategoryQuery.getCategoryId());
				sb.append("'>").append(PestCategoryQuery.getCategoryName());
				sb.append("</li>");
			} else {
				sb.append("<li oprStatus='").append(
						PestCategoryQuery.isPrivilege());
				sb.append("' isMain='").append(true);
				sb.append("' id='").append(PestCategoryQuery.getCategoryId());
				sb.append("'>").append(PestCategoryQuery.getCategoryName());
				sb.append("<ul>");
				sb.append(buildPestTree(PestCategoryQuery.getChildern()));
				sb.append("</ul>");
				sb.append("</li>");
			}
		}

		return sb.toString();
	}

}
