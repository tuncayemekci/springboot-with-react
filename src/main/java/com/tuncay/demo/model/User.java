package com.tuncay.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User {

    private UUID id;
    private String USER_EMAIL;
    private String USER_PASSWORD;

    public User(@JsonProperty String USER_EMAIL, @JsonProperty String USER_PASSWORD) {
        this.id = UUID.randomUUID();
        this.USER_EMAIL = USER_EMAIL;
        this.USER_PASSWORD = USER_PASSWORD;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUSER_PASSWORD() {
        return USER_PASSWORD;
    }

    public void setUSER_PASSWORD(String USER_PASSWORD) {
        this.USER_PASSWORD = USER_PASSWORD;
    }

    public String getUSER_EMAIL() {
        return USER_EMAIL;
    }

    public void setUSER_EMAIL(String USER_EMAIL) {
        this.USER_EMAIL = USER_EMAIL;
    }
}
