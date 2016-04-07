package com.nwsuaf.insect.web;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nwsuaf.insect.service.SystemService;


@Controller
@RequestMapping("templateCfg")
public class TemplateCfgCtrl {
	
	@Autowired
	private SystemService sysService;
	
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "config")
	@ResponseBody
	public Map getDefaultCfg(Model model) {
		Map cfgMap = sysService.getTemplateCfg();
		
		return cfgMap;
	}

}