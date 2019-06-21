package com.example.firstdemo.mapper;

import com.example.firstdemo.pojo.Property;

import java.util.List;

public interface PropertyMapper {

    List<Property> getPropertyList();

    int deleteByIds(List<Integer> propertyIds);

    int insertSelective(Property record);

    Property selectById(Integer propertyId);

    int updateByIdSelective(Property record);

}