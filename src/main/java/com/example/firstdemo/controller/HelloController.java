package com.example.firstdemo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

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
}
