package com.example.firstdemo.service;

import com.example.firstdemo.pojo.Users;

import java.util.List;

public interface UsersService {

    /**
     * 获取全部用户
     *
     * @return
     */
    List<Users> doFindAll();

    /**
     * 创建用户
     *
     * @param users
     */
    void doCreate(Users users);

    /**
     * 验证用户登录
     *
     * @param userName      用户名
     * @param userPassword  密码
     *
     * @return
     *      返回相匹配的对象
     */
    Users doFindByNameAndPassword(String userName, String userPassword);
}
