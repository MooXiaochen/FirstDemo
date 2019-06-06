package com.example.firstdemo.mapper;


import com.example.firstdemo.pojo.Users;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UsersMapper {

    /**
     * 获取所有数据
     *
     * @return
     */
    List<Users> findAll();

    /**
     * 新增
     *
     * @param
     *
     * @return
     */
    void create(Users users);

    Users findByNameAndPassword(@Param("userName")String userName, @Param("userPassword")String userPassword);

}
