package com.example.firstdemo.serviceImpl;

import com.example.firstdemo.mapper.AssetTypeMapper;
import com.example.firstdemo.pojo.AssetType;
import com.example.firstdemo.service.AssetTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @description: 资产类型服务
 *
 * @author: Logan
 * @create: 2019/06/24
 */
@Service(value = "assetTypeService")
public class AssetTypeServiceImpl implements AssetTypeService {
    @Autowired
    private AssetTypeMapper assetTypeMapper;

    @Override
    public List<AssetType> findList() {
        return assetTypeMapper.findList();
    }

    @Override
    public int doCreate(String assetTypeName) {
        return  assetTypeMapper.create(assetTypeName);
    }

    @Override
    public int doUpdateById(Long assetTypeId, String assetTypeName) {
        return  assetTypeMapper.updateById(assetTypeId, assetTypeName);
    }

    @Override
    public int doDeletaByIds(List<Long> ids) {
        return assetTypeMapper.deleteByIds(ids);
    }
}
