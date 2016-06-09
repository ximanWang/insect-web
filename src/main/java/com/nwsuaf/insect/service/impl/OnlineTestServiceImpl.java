package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.mapper.InsectOnlineTestMapper;
import com.nwsuaf.insect.model.InsectOnlineTest;
import com.nwsuaf.insect.service.OnlineTestService;

@Service("OnlineTestService")
public class OnlineTestServiceImpl implements OnlineTestService{

	@Autowired
	private InsectOnlineTestMapper onlineTestMapper;
	
	@Override
	public List<InsectOnlineTest> getTestList() {
		List<InsectOnlineTest> list = onlineTestMapper.getAllTests();
		Random random = new Random();
		List<InsectOnlineTest> reList = new ArrayList<InsectOnlineTest>();
		 // 先抽取，备选数量的个数
        if (list.size() >= 2) {
            for (int i = 0; i < 2; i++) {
                // 随机数的范围为0-list.size()-1;
                int target = random.nextInt(list.size());
                reList.add(list.get(target));
                list.remove(target);
            }
        } else {
            for (int i = 0; i < list.size(); i++) {
                // 随机数的范围为0-list.size()-1;
                int target = random.nextInt(list.size());
                reList.add(list.get(target));
                list.remove(target);
            }
        }
       
        return reList;
    }

}
