package com.example.firstdemo.mapper;

import com.example.firstdemo.pojo.AssetType;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AssetTypeMapper {

    List<AssetType> findList();

    int create(@Param("assetTypeName") String assetTypeName);

    int updateById(@Param("assetTypeId") Long assetTypeId, @Param("assetTypeName") String assetTypeName);

    int deleteByIds(List<Long> assetTypeIds);
}