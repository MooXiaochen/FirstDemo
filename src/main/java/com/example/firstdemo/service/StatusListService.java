package com.example.firstdemo.service;

import com.example.firstdemo.pojo.StatusList;

import java.util.List;

public interface StatusListService {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<StatusList> doFindAll();
}
