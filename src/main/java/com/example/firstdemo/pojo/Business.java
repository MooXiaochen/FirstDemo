package com.example.firstdemo.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class Business implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;

    private Integer countryid;

    private String name;

    private Integer natureid;

    private Integer groupid;

    private BigDecimal agentCheap;

    private BigDecimal agentQuote;

    private String agentExplain;

    private BigDecimal clientCheap;

    private BigDecimal clientQuote;

    private String clientExplain;

    private Integer greenboxid;

    private Integer iscpa;

    private String materials;

    private String services;

    private String dscription;

    private String prescription;

    private Integer isLock;

    private Integer sortnum;

    private Integer querycount;

    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")//页面写入数据库时格式化
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")//数据库导出页面时json格式化
    private Date updatetime;

    private String content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCountryid() {
        return countryid;
    }

    public void setCountryid(Integer countryid) {
        this.countryid = countryid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getNatureid() {
        return natureid;
    }

    public void setNatureid(Integer natureid) {
        this.natureid = natureid;
    }

    public Integer getGroupid() {
        return groupid;
    }

    public void setGroupid(Integer groupid) {
        this.groupid = groupid;
    }

    public BigDecimal getAgentCheap() {
        return agentCheap;
    }

    public void setAgentCheap(BigDecimal agentCheap) {
        this.agentCheap = agentCheap;
    }

    public BigDecimal getAgentQuote() {
        return agentQuote;
    }

    public void setAgentQuote(BigDecimal agentQuote) {
        this.agentQuote = agentQuote;
    }

    public String getAgentExplain() {
        return agentExplain;
    }

    public void setAgentExplain(String agentExplain) {
        this.agentExplain = agentExplain == null ? null : agentExplain.trim();
    }

    public BigDecimal getClientCheap() {
        return clientCheap;
    }

    public void setClientCheap(BigDecimal clientCheap) {
        this.clientCheap = clientCheap;
    }

    public BigDecimal getClientQuote() {
        return clientQuote;
    }

    public void setClientQuote(BigDecimal clientQuote) {
        this.clientQuote = clientQuote;
    }

    public String getClientExplain() {
        return clientExplain;
    }

    public void setClientExplain(String clientExplain) {
        this.clientExplain = clientExplain == null ? null : clientExplain.trim();
    }

    public Integer getGreenboxid() {
        return greenboxid;
    }

    public void setGreenboxid(Integer greenboxid) {
        this.greenboxid = greenboxid;
    }

    public Integer getIscpa() {
        return iscpa;
    }

    public void setIscpa(Integer iscpa) {
        this.iscpa = iscpa;
    }

    public String getMaterials() {
        return materials;
    }

    public void setMaterials(String materials) {
        this.materials = materials == null ? null : materials.trim();
    }

    public String getServices() {
        return services;
    }

    public void setServices(String services) {
        this.services = services == null ? null : services.trim();
    }

    public String getDscription() {
        return dscription;
    }

    public void setDscription(String dscription) {
        this.dscription = dscription == null ? null : dscription.trim();
    }

    public String getPrescription() {
        return prescription;
    }

    public void setPrescription(String prescription) {
        this.prescription = prescription == null ? null : prescription.trim();
    }

    public Integer getIsLock() {
        return isLock;
    }

    public void setIsLock(Integer isLock) {
        this.isLock = isLock;
    }

    public Integer getSortnum() {
        return sortnum;
    }

    public void setSortnum(Integer sortnum) {
        this.sortnum = sortnum;
    }

    public Integer getQuerycount() {
        return querycount;
    }

    public void setQuerycount(Integer querycount) {
        this.querycount = querycount;
    }

    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}
