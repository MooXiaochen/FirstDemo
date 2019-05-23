package com.example.firstdemo.service;

import com.example.firstdemo.pojo.Repository;

import java.util.List;

public interface RepositoryService {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<Repository> doFindAll();

    /**
     * 新增
     * @param repository
     */
    void doCreate(Repository repository);

    /***
     * 根据id获取数据
     *
     * @param id
     * @return
     */
    Repository doRepositoryById (int id);
}
