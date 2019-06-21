package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.PropertyMapper;
import com.example.firstdemo.pojo.Property;
import com.example.firstdemo.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @description: 资产信息service
 * @author: Logan
 * @create: 2019/06/20
 */
@Service(value = "propertyService")
public class PropertyServiceImpl implements PropertyService {
    @Autowired
    private PropertyMapper propertyMapper;

    @Override
    public List<Property> doGetPropertyList() {
        return propertyMapper.getPropertyList();
    }

    @Override
    public void doCreate(Property property) {
        propertyMapper.insertSelective(property);
    }

    @Override
    public void doUpdate(Property property) {
        propertyMapper.updateByIdSelective(property);
    }

    @Override
    public void doDeletaByIds(List<Integer> ids) {
        propertyMapper.deleteByIds(ids);
    }
}
