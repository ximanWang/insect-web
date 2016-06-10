package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.mapper.InsectOnlineTestMapper;
import com.nwsuaf.insect.model.InsectCateUserRole;
import com.nwsuaf.insect.model.InsectOnlineTest;
import com.nwsuaf.insect.service.OnlineTestService;
import com.nwsuaf.insect.util.PaginationUtil;

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
        if (list.size() >= 5) {
            for (int i = 0; i < 5; i++) {
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

	@Override
	public ListResult getTests(Pagination pagination) {
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
	    List<InsectOnlineTest> testList = onlineTestMapper.getAllTests();
	    
	    PageInfo page = new PageInfo(testList);
		ListResult listResult = new ListResult(testList,page.getTotal());
		return listResult;
	}

}
