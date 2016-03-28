package com.nwsuaf.insect.mapper.test;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import org.junit.Test;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.web.category.UserTestCtrl;

public class TestController {
	
	@Test
	public void testCtrl(){
		UserTestCtrl userCtrl = new UserTestCtrl();
		ModelAndView mv = userCtrl.getUser();
		assertEquals("/view/hello",mv.getViewName());
	}
	@Test
	public void testIsNull(){
		Str str = new Str();
		str.setName("");
		List<Str> strList = new LinkedList<Str>();
		strList.add(str);
		for (Str str2 : strList) {
			if(str2.getName()==""){
				strList.remove(str2);
			}
		}
		System.out.println(strList.size());
	}
	
	@Test
	public void testIsNull2(){
		Str str = new Str();
		str.setName("");
		List<Str> strList = new ArrayList<Str>();
		strList.add(str);
		System.out.println(strList.size());
		Iterator<Str> sListIterator = strList.iterator();  
		while(sListIterator.hasNext()){  
			Str e = sListIterator.next();  
		    if(e.getName().length()<=0){  
		    sListIterator.remove();  
		    }  
		}
		System.out.println(strList.size());
	}
}
class Str{
	String name;
	public void setName(String name){
		this.name = name;
	}
	public String getName(){
		return this.name;
	}
}