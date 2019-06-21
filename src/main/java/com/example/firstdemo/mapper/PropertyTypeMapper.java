package com.example.firstdemo.mapper;

import com.example.firstdemo.pojo.PropertyType;

public interface PropertyTypeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(PropertyType record);

    int insertSelective(PropertyType record);

    PropertyType selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PropertyType record);

    int updateByPrimaryKey(PropertyType record);
}