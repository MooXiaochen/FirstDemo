package com.example.firstdemo.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class Repository implements Serializable {
    private static final long serialVersionUID = 1L;

    private int id;
    private int userId;
    private String keyword;
    private String section;
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")//页面写入数据库时格式化
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")//数据库导出页面时json格式化
    private Date publishTime;
    private String theme;
    private int publishState;

    private RepositoryDetails repositoryDetails;

    private List<RepositoryComment> repositoryCommentList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public Date getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(Date publishTime) {
        this.publishTime = publishTime;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public int getPublishState() {
        return publishState;
    }

    public void setPublishState(int publishState) {
        this.publishState = publishState;
    }

    public RepositoryDetails getRepositoryDetails() {
        return repositoryDetails;
    }

    public void setRepositoryDetails(RepositoryDetails repositoryDetails) {
        this.repositoryDetails = repositoryDetails;
    }

    public List<RepositoryComment> getRepositoryCommentList() {
        return repositoryCommentList;
    }

    public void setRepositoryCommentList(List<RepositoryComment> repositoryCommentList) {
        this.repositoryCommentList = repositoryCommentList;
    }
}
