package com.example.firstdemo.service;

import com.example.firstdemo.pojo.Property;

import java.util.List;
import java.util.Map;

public interface PropertyService {
    /**
     * 获取所有资产列表信息
     *
     * @return
     */
    List<Property> getPropertyList();

    /**
     * 按条件查询资产列表信息
     *
     * @param userId
     * @param propertyTypeId
     * @param propertyName
     * @param equipmentNo
     * @return
     */
    List<Property> findListByCondition(Integer userId, Integer propertyTypeId, String propertyName, String equipmentNo);

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
