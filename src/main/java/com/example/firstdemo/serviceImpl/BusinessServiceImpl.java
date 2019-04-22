package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.BusinessMapper;
import com.example.firstdemo.pojo.Business;
import com.example.firstdemo.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "businessService")
public class BusinessServiceImpl implements BusinessService {
    @Autowired
    private BusinessMapper businessMapper;

    @Override
    public int getCount() {

        return businessMapper.getCount();
    }

    @Override
    public List<Business> doTopHundredByList () {
        return businessMapper.topHundredByList();
    }
}
