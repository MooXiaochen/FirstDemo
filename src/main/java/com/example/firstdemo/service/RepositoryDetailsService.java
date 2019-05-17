package com.example.firstdemo.service;

import com.example.firstdemo.pojo.Repository;
import com.example.firstdemo.pojo.RepositoryDetails;

import java.util.List;

public interface RepositoryDetailsService {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<RepositoryDetails> doFindAll();

    /**
     * 新增
     * @param repositoryDetails
     *
     * @return
     */
    void doCreate(RepositoryDetails repositoryDetails);
}
