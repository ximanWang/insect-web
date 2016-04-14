package com.nwsuaf.insect.component;

import java.io.IOException;
import java.io.Writer;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.nwsuaf.insect.enums.SelectType;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.service.InsectCategoryService;
import com.nwsuaf.insect.service.InsectService;

import freemarker.core.Environment;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateDirectiveModel;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;
import freemarker.template.TemplateModelException;

public class SelecterDirective implements TemplateDirectiveModel {

	private SelectType type;

	@Autowired
	private InsectCategoryService insectCategoryService;
	@Autowired
	private InsectService insectService;
	
	@Override
	public void execute(Environment env, Map params, TemplateModel[] loopVars,
			TemplateDirectiveBody body) throws TemplateException, IOException {
		if (loopVars.length != 0) {
			throw new TemplateModelException("This directive doesn't allow loop variables.");
		}
		switch (type) {
		case ancestorSelector:
			new SelectFilterWriter(type, params) {
				protected void writeOptions(StringBuilder sb) {
					List<InsectCategoryQuery> insectCates = insectCategoryService.getAncestorList();
					for (InsectCategoryQuery cate : insectCates) {
						if (isCheckPrivilege() && cate.getIsLeaf() == 1) {
							continue;
						}
						new OptionWraper(cate.getCategoryName(), cate.getCategoryId().toString())
								.writeHtml(sb);
					}
				};
			}.write(env.getOut());
			break;
		case insectSelector:
			new SelectFilterWriter(type, params) {
				protected void writeOptions(StringBuilder sb) {
					List<Insect> insects = insectService.selectAllInsects();
					for (Insect insect : insects) {
						if (isCheckPrivilege()) {
							continue;
						}
						new OptionWraper(insect.getChineseName(), insect.getCategoryId().toString())
								.writeHtml(sb);
					}
				};
			}.write(env.getOut());
			break;
		case cateSelector:
			new SelectFilterWriter(type, params) {
				protected void writeOptions(StringBuilder sb) {
					List<InsectCategoryQuery> insectCates = insectCategoryService
							.getFlatCategoryList();
					for (InsectCategoryQuery cate : insectCates) {
						OptionWraper option = new OptionWraper(cate.getCategoryName(), cate
								.getCategoryId().toString());
						if (this.isCheckPrivilege() && cate.getIsLeaf() == 1) {
							option.addField("disabled", "true");
						}
						option.writeHtml(sb);
					}
				};
			}.write(env.getOut());
			break;
		default:
			new SelectFilterWriter(type, params).write(env.getOut());
			break;
		}

	}

	private String getValue(String name, Map params, String defaultValue) {
		Object obj = params.get(name);
		if (obj != null && !StringUtils.isEmpty(obj.toString())) {
			return obj.toString();
		}
		return defaultValue;
	}

	class SelectFilterWriter {
		private String id;
		private String name;
		private String clazz;
		/** 是否需要判断是否具有权限，以便设置哪些option为disabled */
		private boolean checkPrivilege = false;

		@SuppressWarnings("rawtypes")
		public SelectFilterWriter(SelectType type, Map params) {
			this.id = getValue("id", params, type.toString() + "-" + new Date().getTime());
			this.name = getValue("name", params, type.toString());
			this.clazz = getValue("class", params, "");
			this.checkPrivilege = getValue("privilege", params, "false").equalsIgnoreCase("true");
		}

		public void write(Writer out) throws IOException {
			StringBuilder sb = new StringBuilder();
			sb.append("<select id=\"").append(this.getId());
			sb.append("\" name=\"").append(this.getName());
			sb.append("\" class=\"").append(this.getClazz()).append("\">");
			sb.append("<option value=\"\">请选择</option>");
			this.writeOptions(sb);
			sb.append("</select>");
			out.write(sb.toString());
			out.flush();
		}

		protected void writeOptions(StringBuilder sb) {

		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getClazz() {
			return clazz;
		}

		public void setClazz(String clazz) {
			this.clazz = clazz;
		}

		public boolean isCheckPrivilege() {
			return checkPrivilege;
		}

		public void setCheckPrivilege(boolean checkPrivilege) {
			this.checkPrivilege = checkPrivilege;
		}
	}

	class OptionWraper {
		private String text;
		private String value;
		private Map<String, String> extFields = new HashMap<String, String>();

		public OptionWraper(String text, String value) {
			this.text = text;
			this.value = value;
		}

		public void addField(String key, String value) {
			this.extFields.put(key, value);
		}

		public void writeHtml(StringBuilder sb) {
			sb.append("<option ");
			for (Map.Entry<String, String> entry : extFields.entrySet()) {
				sb.append(entry.getKey()).append("=\"");
				sb.append(entry.getValue()).append("\" ");
			}
			sb.append("value=\"").append(this.value).append("\">");
			sb.append(this.text).append("</option>");
		}
	}

	public SelectType getType() {
		return type;
	}

	public void setType(SelectType type) {
		this.type = type;
	}
}
