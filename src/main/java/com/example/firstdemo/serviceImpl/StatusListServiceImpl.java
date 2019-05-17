package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.StatusListMapper;
import com.example.firstdemo.pojo.StatusList;
import com.example.firstdemo.service.StatusListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "statusListService")
public class StatusListServiceImpl implements StatusListService {

    @Autowired
    private StatusListMapper statusListMapper;

    @Override
    public List<StatusList> doFindAll() {
        return statusListMapper.findAll();
    }
}
