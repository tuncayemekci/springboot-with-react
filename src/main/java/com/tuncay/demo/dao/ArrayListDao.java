package com.tuncay.demo.dao;

import com.tuncay.demo.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("ArrayListDao")
public class ArrayListDao implements UserDao {

    private static List<User> DB = new ArrayList<>();

    static {
        DB.add(new User("Tuncay", "12345", "tuncayemekci@gmail.com"));
        DB.add(new User("Ali", "abcasd", "ali@gmail.com"));
        DB.add(new User("Veli", "tasdsd", "veli@gmail.com"));
        DB.add(new User("Hasan", "kjghas", "hasan@gmail.com"));
        DB.add(new User("Huseyin", "fahgwa", "huseyin@gmail.com"));
    }

    @Override
    public int insertUser(User user) {
        DB.add(user);
        return 1;
    }

    @Override
    public List<User> selectAllUsers(){
        return DB;
    }

    @Override
    public Optional<User> selectUserByEmail(String USER_EMAIL) {
        return DB.stream()
                .filter(user -> user.getUSER_EMAIL().equals(USER_EMAIL))
                .findFirst();
    }


}
