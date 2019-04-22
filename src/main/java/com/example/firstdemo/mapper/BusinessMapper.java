package com.example.firstdemo.mapper;


import com.example.firstdemo.pojo.Business;

import java.util.List;

public interface BusinessMapper {

    /**
     * 获取总条数
     *
     * @return
     *      返回结果
     */
    int getCount();

    /**
     * 获取前100条数据
     *
     * @return
     *      返回结果
     */
    List<Business> topHundredByList();

}
