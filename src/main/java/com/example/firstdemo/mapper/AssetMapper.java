package com.example.firstdemo.mapper;

import com.example.firstdemo.pojo.Asset;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AssetMapper {

    List<Asset> getAssetList();


    /**
     * 按指定条件查询
     *
     * @param userId  用户id
     * @param assetTypeId  资产类型
     * @param assetName  资产名称
     * @param equipmentNo    设备编号
     * @return
     */
    List<Asset> findListByCondition(@Param("userId") Integer userId, @Param("assetTypeId") Integer assetTypeId,
                                    @Param("assetName") String assetName, @Param("equipmentNo") String equipmentNo);

    int deleteByIds(List<Integer> assetIds);

    int insertSelective(Asset record);

    Asset selectById(Integer assetId);

    int updateByIdSelective(Asset record);

}