package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.PropertyTypeMapper;
import com.example.firstdemo.pojo.PropertyType;
import com.example.firstdemo.service.PropertyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @description: 资产类型服务
 *
 * @author: Logan
 * @create: 2019/06/24
 */
@Service(value = "propertyTypeService")
public class PropertyTypeServiceImpl implements PropertyTypeService {
    @Autowired
    private PropertyTypeMapper propertyTypeMapper;

    @Override
    public List<PropertyType> findList() {
        return propertyTypeMapper.findList();
    }

    @Override
    public int doCreate(String propertyTypeName) {
        return  propertyTypeMapper.create(propertyTypeName);
    }

    @Override
    public int doUpdateById(Long propertyTypeId, String propertyTypeName) {
        return  propertyTypeMapper.updateById(propertyTypeId, propertyTypeName);
    }

    @Override
    public int doDeletaByIds(List<Long> ids) {
        return propertyTypeMapper.deleteByIds(ids);
    }
}
