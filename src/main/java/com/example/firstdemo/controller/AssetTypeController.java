package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.AssetType;
import com.example.firstdemo.service.AssetTypeService;
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
@RequestMapping("/assetType")
public class AssetTypeController {
    @Autowired
    private AssetTypeService assetTypeService;


    @ResponseBody
    @RequestMapping("/find")
    public List<AssetType> find(){
        return assetTypeService.findList();
    }

    @ResponseBody
    @RequestMapping("/save")
    public void save(@RequestParam Map<String, Object> params){
        Long id = null;
        if (!"".equals(params.get("assetTypeId"))) {
            id = Long.decode(params.get("assetTypeId").toString());
        }
        String assetTypeName = params.get("assetTypeName").toString();
        if (id == null) {
            assetTypeService.doCreate(assetTypeName);
        } else {
            assetTypeService.doUpdateById(id, assetTypeName);
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
            assetTypeService.doDeletaByIds(idList);
        }
    }
}
