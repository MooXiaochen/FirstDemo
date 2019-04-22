package com.example.firstdemo.service;

import com.example.firstdemo.pojo.Business;

import java.util.List;

public interface BusinessService {

    /**
     * 查询总条数
     * @return
     */
    int getCount();

    /**
     * 获取前100条数据对象
     *
     * @return
     */
    List<Business> doTopHundredByList();
}
