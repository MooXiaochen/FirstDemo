package com.example.firstdemo.mapper;


import com.example.firstdemo.pojo.RepositoryDetails;

import java.util.List;

public interface RepositoryDetailsMapper {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<RepositoryDetails> findAll();

    /**
     * 新增
     *
     * @param repositoryDetails
     */
    void create(RepositoryDetails repositoryDetails);
}
