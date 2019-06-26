package com.example.firstdemo.mapper;

import com.example.firstdemo.pojo.Property;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface PropertyMapper {

    List<Property> getPropertyList();


    /**
     * 按指定条件查询
     *
     * @param userId  用户id
     * @param propertyTypeId  资产类型
     * @param propertyName  资产名称
     * @param equipmentNo    设备编号
     * @return
     */
    List<Property> findListByCondition(@Param("userId") Integer userId, @Param("propertyTypeId") Integer propertyTypeId,
                                       @Param("propertyName") String propertyName, @Param("equipmentNo") String equipmentNo);

    int deleteByIds(List<Integer> propertyIds);

    int insertSelective(Property record);

    Property selectById(Integer propertyId);

    int updateByIdSelective(Property record);

}