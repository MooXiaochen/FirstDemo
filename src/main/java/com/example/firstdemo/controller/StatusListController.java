package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.StatusList;
import com.example.firstdemo.service.StatusListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/statusList")
public class StatusListController {

    @Autowired
    private StatusListService statusListService;

    @RequestMapping("/find")
    public List<StatusList> hello() {
        return statusListService.doFindAll();
    }
}
