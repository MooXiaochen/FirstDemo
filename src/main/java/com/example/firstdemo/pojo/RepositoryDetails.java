package com.example.firstdemo.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class RepositoryDetails implements Serializable {
    private static final long serialVersionUID = 1L;

    private int id;
    private int repositoryId;
    private String content;
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")//页面写入数据库时格式化
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")//数据库导出页面时json格式化
    private Date updateTime;
    private int updateId;
    private int optCount;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRepositoryId() {
        return repositoryId;
    }

    public void setRepositoryId(int repositoryId) {
        this.repositoryId = repositoryId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public int getUpdateId() {
        return updateId;
    }

    public void setUpdateId(int updateId) {
        this.updateId = updateId;
    }

    public int getOptCount() {
        return optCount;
    }

    public void setOptCount(int optCount) {
        this.optCount = optCount;
    }
}
