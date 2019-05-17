package com.example.firstdemo.mapper;


import com.example.firstdemo.pojo.RepositoryComment;

import java.util.List;

public interface RepositoryCommentMapper {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<RepositoryComment> findAll();
}
