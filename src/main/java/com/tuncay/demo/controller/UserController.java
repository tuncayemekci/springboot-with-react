package com.tuncay.demo.controller;

import com.tuncay.demo.model.User;
import com.tuncay.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/login")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    public int addUser(User user){
        return userService.addUser(user);
    }

    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }


}
