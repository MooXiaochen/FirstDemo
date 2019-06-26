package com.example.firstdemo.service;

import com.example.firstdemo.pojo.PropertyType;

import java.util.List;

public interface PropertyTypeService {
    /**
     * 查询所有
     *
     * @return
     */
    List<PropertyType> findList();

    /**
     * 创建资产类型
     *
     * @param propertyTypeName
     */
    int doCreate(String propertyTypeName);


    int doUpdateById(Long propertyTypeId, String propertyTypeName);

    /**
     * 根据id集合删除
     *
     * @param ids
     */
    int doDeletaByIds (List<Long> ids);
}
