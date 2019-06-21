package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.Property;
import com.example.firstdemo.service.PropertyService;
import com.example.firstdemo.utils.MathUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/**
 * @description: 资产信息控制器
 *
 * @author: Logan
 * @create: 2019/06/20
 */

@RestController
@RequestMapping("/property")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;


    @ResponseBody
    @RequestMapping("/findList")
    public List<Property> findList(){
        return propertyService.doGetPropertyList();
    }

    @ResponseBody
    @RequestMapping("/save")
    public void save(@RequestParam Map<String, Object> params){
        Property property = new Property();
        property.setPropertyPrice(MathUtil.getBigDecimal(params.get("propertyPrice")));
        property.setPropertyName(params.get("propertyName").toString());
        property.setEquipmentNo(params.get("equipmentNo").toString());
        property.setPropertyTypeId(Integer.decode(params.get("propertyTypeId").toString()));
        property.setDescription(params.get("description").toString());
        property.setCount(Integer.decode(params.get("count").toString()));
        if (property.getPropertyId() == null) {
            property.setCreateTime(new Date());
            propertyService.doCreate(property);
        } else {
            property.setUpdateTime(new Date());
            propertyService.doUpdate(property);
        }
    }

    @ResponseBody
    @RequestMapping("/deletaPropertyList")
    public void deletaPropertyList (@RequestParam Map<String, Object> params) {
        if (params.get("ids") != null) {
            List<Integer> idList = new ArrayList<>();
            for (String id : params.get("ids").toString().split(",")) {
                idList.add(Integer.decode(id));
            }
            propertyService.doDeletaByIds(idList);
        }
    }
}
