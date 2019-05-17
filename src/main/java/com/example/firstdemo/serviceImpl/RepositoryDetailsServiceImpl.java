package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.RepositoryDetailsMapper;
import com.example.firstdemo.pojo.RepositoryDetails;
import com.example.firstdemo.service.RepositoryDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "repositoryDetailsService")
public class RepositoryDetailsServiceImpl implements RepositoryDetailsService {

    @Autowired
    private RepositoryDetailsMapper repositoryDetailsMapper;

    @Override
    public List<RepositoryDetails> doFindAll() {
        return repositoryDetailsMapper.findAll();
    }

    @Override
    public void doCreate(RepositoryDetails repositoryDetails) {
        repositoryDetailsMapper.create(repositoryDetails);
    }
}
