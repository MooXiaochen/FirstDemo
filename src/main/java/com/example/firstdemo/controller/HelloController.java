package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.Business;
import com.example.firstdemo.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @Autowired
    private BusinessService businessService;

    @RequestMapping("/hello")
    public String hello() {
        return "hello spring boot!";
    }

    @RequestMapping("/hi")
    public String hi() {
        return "hello word!";
    }

    @RequestMapping("/quit")
    public String quit() {
        return "您已退出!";
    }

//    @RequestMapping("/{id}")
//    public Users getUser(@PathVariable("id") Long id) {
//        return new Users(id, "moxiaochen", 25);
//    }

    @RequestMapping("count")
    public String getCount() {
        return "当前数据的条数为" + businessService.getCount();
    }

    @RequestMapping("top")
    public List<Business> getTopHundred() {
        return businessService.doTopHundredByList();
    }
}
