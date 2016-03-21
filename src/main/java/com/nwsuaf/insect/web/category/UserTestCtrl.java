package com.nwsuaf.insect.web.category;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
  
@Controller  
@RequestMapping("/user")  
public class UserTestCtrl {  
  
    @RequestMapping(value = "/getUser")   
    public ModelAndView getUser() {  
        ModelAndView mv = new ModelAndView();  
        mv.addObject("message", "Hello World!!!");  
        mv.setViewName("hello1");  
        System.out.println("ininininin");
        return mv;  
    }  
}  