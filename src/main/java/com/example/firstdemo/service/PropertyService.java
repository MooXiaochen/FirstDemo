package com.example.firstdemo.service;

import com.example.firstdemo.pojo.Property;

import java.util.List;

public interface PropertyService {
    /**
     * 获取所有资产列表信息
     *
     * @return
     */
    List<Property> doGetPropertyList();

    /**
     * 创建资产信息
     *
     * @param property 待创建的资产信息对象
     */
    void doCreate (Property property);

    /**
     * 更新资产信息
     *
     * @param property 待创建的资产信息对象
     */
    void doUpdate (Property property);

    /**
     * 根据id集合删除
     *
     * @param ids
     */
    void doDeletaByIds (List<Integer> ids);
}
