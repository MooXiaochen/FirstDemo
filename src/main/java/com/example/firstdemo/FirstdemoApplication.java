package com.example.firstdemo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;


@RestController
@SpringBootApplication
@MapperScan("com.example.firstdemo.mapper")//将项目中对应的mapper类的路径加进来
public class FirstdemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(FirstdemoApplication.class, args);
    }


    @RequestMapping("/")
    public String index(Model model, HttpServletResponse response) {
        model.addAttribute("name", "simonsfan");
        return "static/js/app/index.html";
    }

}
