package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.Asset;
import com.example.firstdemo.service.AssetService;
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
@RequestMapping("/asset")
public class AssetController {

    @Autowired
    private AssetService assetService;


    @ResponseBody
    @RequestMapping("/findList")
    public List<Asset> findList(){
        return assetService.getAssetList();
    }

    @ResponseBody
    @RequestMapping("/save")
    public void save(@RequestParam Map<String, Object> params){
        Asset asset = new Asset();
        if (params.get("assetId") != null && !params.get("assetId").equals("")) {
            asset.setAssetId(Long.decode(params.get("assetId").toString()));
        }
        if (params.get("userId") != null && !params.get("userId").equals("")) {
            asset.setUserId(Long.decode(params.get("userId").toString()));
        }
        if (params.get("assetTypeId") != null && !params.get("assetTypeId").equals("")) {
            asset.setAssetTypeId(Integer.decode(params.get("assetTypeId").toString()));
        }
        asset.setAssetPrice(MathUtil.getBigDecimal(params.get("assetPrice")));
        asset.setAssetName(params.get("assetName").toString());
        asset.setRegistrant(params.get("registrant").toString());
        asset.setEquipmentNo(params.get("equipmentNo").toString());
        asset.setDescription(params.get("description").toString());
        asset.setCount(Integer.decode(params.get("count").toString()));
        if (asset.getAssetId() == null) {
            asset.setCreateTime(new Date());
            assetService.doCreate(asset);
        } else {
            asset.setUpdateTime(new Date());
            assetService.doUpdate(asset);
        }
    }

    @ResponseBody
    @RequestMapping("/deletaassetList")
    public void deletaAssetList (@RequestParam Map<String, Object> params) {
        if (params.get("ids") != null) {
            List<Integer> idList = new ArrayList<>();
            for (String id : params.get("ids").toString().split(",")) {
                idList.add(Integer.decode(id));
            }
            assetService.doDeletaByIds(idList);
        }
    }

    @ResponseBody
    @RequestMapping("/find")
    public List<Asset> find (@RequestParam Map<String, Object> params) {
        int userId = 0;
        int assetTypeId = 0;
        if (!params.get("userId").equals("")) {
            userId = Integer.decode(params.get("userId").toString());
        }
        if (!params.get("assetType").equals("")) {
            assetTypeId = Integer.decode(params.get("assetType").toString());
        }
        String assetName = params.get("assetName").toString();
        String equipmentNo = params.get("equipmentNo").toString();
        return assetService.findListByCondition(userId, assetTypeId, assetName, equipmentNo);
    }
}
