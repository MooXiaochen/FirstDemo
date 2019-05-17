package com.example.firstdemo.pojo;

import java.io.Serializable;

public class StatusList implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;

    private String text;

    private String tableName;

    private String filedName;

    private String remark;

    private Integer statusNo;

    private String statusType;

    private String appDept;

    private String groupName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text == null ? null : text.trim();
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName == null ? null : tableName.trim();
    }

    public String getFiledName() {
        return filedName;
    }

    public void setFiledName(String filedName) {
        this.filedName = filedName == null ? null : filedName.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Integer getStatusNo() {
        return statusNo;
    }

    public void setStatusNo(Integer statusNo) {
        this.statusNo = statusNo;
    }

    public String getStatusType() {
        return statusType;
    }

    public void setStatusType(String statusType) {
        this.statusType = statusType == null ? null : statusType.trim();
    }

    public String getAppDept() {
        return appDept;
    }

    public void setAppDept(String appDept) {
        this.appDept = appDept == null ? null : appDept.trim();
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName == null ? null : groupName.trim();
    }

}
