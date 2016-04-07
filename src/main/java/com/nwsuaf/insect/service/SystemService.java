package com.nwsuaf.insect.service;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.xml.XMLSerializer;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class SystemService {
	
	private Logger LOGGER = Logger.getLogger(SystemService.class);
	
	private Map cfgMap = new HashMap();

	@PostConstruct
	public void init() {
		LOGGER.debug("init template cfg...");
		
		InputStream is = SystemService.class.getResourceAsStream("/template.cfg.xml");
		try {
			String xml = IOUtils.toString(is);
	        
	        XMLSerializer xmlSerializer = new XMLSerializer(); 
	        JSON json = xmlSerializer.read(xml);
	        JSONArray templates = JSONArray.fromObject(json.toString(2));
	        for(int i = 0; i < templates.size(); i++) {
	        	Map template = (Map)templates.get(i);
	        	if(template.containsKey("@key")) {
	        		String templateKey = template.get("@key").toString();
		        	cfgMap.put(templateKey, template);
	        	}
	        }
	        LOGGER.debug("template cfg : " + cfgMap);
		} catch (Exception e) {
		}
	}
	
	public Map getTemplateCfg() {
		return cfgMap;
	}
	
}
