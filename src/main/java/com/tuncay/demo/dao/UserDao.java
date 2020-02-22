package com.tuncay.demo.dao;

import com.tuncay.demo.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {

    int insertUser(User user);

    List<User> selectAllUsers();

    Optional<User> selectUserByEmail(String USER_EMAIL);

}
