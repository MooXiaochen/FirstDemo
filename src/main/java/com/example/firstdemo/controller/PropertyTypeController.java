package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.PropertyType;
import com.example.firstdemo.service.PropertyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @description: 资产类型控制器
 *
 * @author: Logan
 * @create: 2019/06/24
 */
@RestController
@RequestMapping("/propertyType")
public class PropertyTypeController {
    @Autowired
    private PropertyTypeService propertyTypeService;


    @ResponseBody
    @RequestMapping("/find")
    public List<PropertyType> find(){
        return propertyTypeService.findList();
    }

    @ResponseBody
    @RequestMapping("/save")
    public void save(@RequestParam Map<String, Object> params){
        Long id = null;
        if (!"".equals(params.get("propertyTypeId"))) {
            id = Long.decode(params.get("propertyTypeId").toString());
        }
        String propertyTypeName = params.get("propertyTypeName").toString();
        if (id == null) {
            propertyTypeService.doCreate(propertyTypeName);
        } else {
            propertyTypeService.doUpdateById(id, propertyTypeName);
        }
    }

    @ResponseBody
    @RequestMapping("/deletaByIds")
    public void deletaByIds (@RequestParam Map<String, Object> params) {
        if (params.get("ids") != null) {
            List<Long> idList = new ArrayList<>();
            for (String id : params.get("ids").toString().split(",")) {
                idList.add(Long.decode(id));
            }
            propertyTypeService.doDeletaByIds(idList);
        }
    }
}
