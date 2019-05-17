package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.RepositoryCommentMapper;
import com.example.firstdemo.pojo.RepositoryComment;
import com.example.firstdemo.service.RepositoryCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "repositoryCommentService")
public class RepositoryCommentServiceImpl implements RepositoryCommentService {

    @Autowired
    private RepositoryCommentMapper repositoryCommentMapper;

    @Override
    public List<RepositoryComment> doFindAll() {
        return repositoryCommentMapper.findAll();
    }
}
