package com.example.firstdemo.pojo;

import java.io.Serializable;

/**
 * @description: 知产类型
 *
 * @author: Logan
 * @create: 2019/06/20
 */
public class PropertyType implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    private String typeName;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}