package com.nwsuaf.insect.web.front;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
public class TalkController {

	@RequestMapping(value = "/talkList")
	public String loadList(Integer id, ModelMap model) {
		
		
		return "frontTalk/talkList";
	}
}
