package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.RepositoryMapper;
import com.example.firstdemo.pojo.Repository;
import com.example.firstdemo.service.RepositoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "repositoryService")
public class RepositoryServiceImpl implements RepositoryService {

    @Autowired
    private RepositoryMapper repositoryMapper;

    @Override
    public List<Repository> doFindAll() {
        return repositoryMapper.findAll();
    }

    @Override
    public void doCreate(Repository repository) {
        repositoryMapper.create(repository);
    }

    @Override
    public Repository doRepositoryById(int id) {
        return repositoryMapper.findById(id);
    }
}
