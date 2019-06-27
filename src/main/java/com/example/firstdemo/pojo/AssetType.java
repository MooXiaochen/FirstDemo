package com.example.firstdemo.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

/**
 * @description: 知产类型
 *
 * @author: Logan
 * @create: 2019/06/20
 */
public class AssetType implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long assetTypeId;

    private String assetTypeName;

    public Long getAssetTypeId() {
        return assetTypeId;
    }

    public void setAssetTypeId(Long assetTypeId) {
        this.assetTypeId = assetTypeId;
    }

    public String getAssetTypeName() {
        return assetTypeName;
    }

    public void setAssetTypeName(String assetTypeName) {
        this.assetTypeName = assetTypeName;
    }
}