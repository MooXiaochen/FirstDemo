package com.example.firstdemo.mapper;

import com.example.firstdemo.pojo.StatusList;

import java.util.List;

public interface StatusListMapper {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<StatusList> findAll();
}
