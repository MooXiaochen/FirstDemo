package com.example.firstdemo.service;

import com.example.firstdemo.pojo.Asset;

import java.util.List;

public interface AssetService {
    /**
     * 获取所有资产列表信息
     *
     * @return
     */
    List<Asset> getAssetList();

    /**
     * 按条件查询资产列表信息
     *
     * @param userId
     * @param assetTypeId
     * @param assetName
     * @param equipmentNo
     * @return
     */
    List<Asset> findListByCondition(Integer userId, Integer assetTypeId, String assetName, String equipmentNo);

    /**
     * 创建资产信息
     *
     * @param asset 待创建的资产信息对象
     */
    void doCreate (Asset asset);

    /**
     * 更新资产信息
     *
     * @param asset 待创建的资产信息对象
     */
    void doUpdate (Asset asset);

    /**
     * 根据id集合删除
     *
     * @param ids
     */
    void doDeletaByIds (List<Integer> ids);
}
