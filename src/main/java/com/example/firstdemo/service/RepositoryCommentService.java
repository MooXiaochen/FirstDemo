package com.example.firstdemo.service;

import com.example.firstdemo.pojo.RepositoryComment;

import java.util.List;

public interface RepositoryCommentService {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<RepositoryComment> doFindAll();
}
