package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.AssetMapper;
import com.example.firstdemo.pojo.Asset;
import com.example.firstdemo.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @description: 资产信息service
 * @author: Logan
 * @create: 2019/06/20
 */
@Service(value = "assetService")
public class AssetServiceImpl implements AssetService {
    @Autowired
    private AssetMapper assetMapper;

    @Override
    public List<Asset> getAssetList() {
        return assetMapper.getAssetList();
    }

    @Override
    public List<Asset> findListByCondition(Integer userId, Integer assetTypeId, String assetName, String equipmentNo) {
        return assetMapper.findListByCondition(userId, assetTypeId, assetName, equipmentNo);
    }

    @Override
    public void doCreate(Asset asset) {
        assetMapper.insertSelective(asset);
    }

    @Override
    public void doUpdate(Asset asset) {
        assetMapper.updateByIdSelective(asset);
    }

    @Override
    public void doDeletaByIds(List<Integer> ids) {
        assetMapper.deleteByIds(ids);
    }
}
