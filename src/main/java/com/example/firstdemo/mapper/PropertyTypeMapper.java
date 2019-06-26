package com.example.firstdemo.mapper;

import com.example.firstdemo.pojo.PropertyType;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface PropertyTypeMapper {

    List<PropertyType> findList();

    int create(@Param("propertyTypeName") String propertyTypeName);

    int updateById(@Param("propertyTypeId") Long propertyTypeId, @Param("propertyTypeName") String propertyTypeName);

    int deleteByIds(List<Long> propertyTypeIds);
}