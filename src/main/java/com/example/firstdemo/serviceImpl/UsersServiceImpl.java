package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.UsersMapper;
import com.example.firstdemo.pojo.Users;
import com.example.firstdemo.service.UsersService;
import com.example.firstdemo.utils.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "usersService")
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UsersMapper usersMapper;

    @Override
    public List<Users> doFindAll() {
        return usersMapper.findAll();
    }

    @Override
    public void doCreate(Users users) {
        usersMapper.create(users);
    }

    @Override
    public Users doFindByNameAndPassword(String userName, String userPassword) {
        return usersMapper.findByNameAndPassword(userName, PasswordUtil.encryptBasedDes(userPassword));
    }
}
