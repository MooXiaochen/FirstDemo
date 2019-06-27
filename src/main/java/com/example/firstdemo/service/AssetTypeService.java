package com.example.firstdemo.service;

import com.example.firstdemo.pojo.AssetType;

import java.util.List;

public interface AssetTypeService {
    /**
     * 查询所有
     *
     * @return
     */
    List<AssetType> findList();

    /**
     * 创建资产类型
     *
     * @param assetTypeName
     */
    int doCreate(String assetTypeName);


    int doUpdateById(Long assetTypeId, String assetTypeName);

    /**
     * 根据id集合删除
     *
     * @param ids
     */
    int doDeletaByIds (List<Long> ids);
}
