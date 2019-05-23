package com.example.firstdemo.mapper;


import com.example.firstdemo.pojo.Repository;

import java.util.List;

public interface RepositoryMapper {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<Repository> findAll();

    /**
     * 新增
     *
     * @param repository
     * @return
     */
    void create(Repository repository);

    /**
     * 根据id获取数据
     *
     * @param id
     * @return
     */
    Repository findById (int id);
}
