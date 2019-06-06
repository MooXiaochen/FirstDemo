package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.Users;
import com.example.firstdemo.service.UsersService;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @RequestMapping("/findAll")
    public List<Users> findAll(){
        return usersService.doFindAll();
    }

    @RequestMapping("/create")
    public void createUser(@RequestParam Map<String, Object> params) {
        Users users = new Users();
        usersService.doCreate(users);
    }

    @RequestMapping("/login")
    public JSONObject login(HttpServletRequest request) {
        Users currentlyUsers = usersService.doFindByNameAndPassword(request.getParameter("username"), request.getParameter("password"));
        JSONObject jsonObject = new JSONObject();
        if (null != currentlyUsers) {
            jsonObject.put("success", true);
            jsonObject.put("nickName", currentlyUsers.getNickName());
            jsonObject.put("userName", currentlyUsers.getUserName());
        } else {
            jsonObject.put("err", "验证失败！");
        }
        return jsonObject;
    }

}