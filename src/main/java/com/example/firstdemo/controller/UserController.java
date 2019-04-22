package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.Business;
import com.example.firstdemo.pojo.User;
import com.example.firstdemo.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private BusinessService businessService;

    @RequestMapping("/{id}")
    public User getUser(@PathVariable("id") Long id) {
        return new User(id, "moxiaochen", 25);
    }

    @RequestMapping("count")
    public String getCount() {
        return "当前数据的条数为" + businessService.getCount();
    }

    @RequestMapping("top")
    public List<Business> getTopHundred() {
        return businessService.doTopHundredByList();
    }
}