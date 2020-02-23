package com.tuncay.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User {

    private UUID id;
    private String USER_EMAIL;
    private String USER_PASSWORD;

    public User(String USER_EMAIL, String USER_PASSWORD) {
        this.id = UUID.randomUUID();
        this.USER_EMAIL = USER_EMAIL;
        this.USER_PASSWORD = USER_PASSWORD;
    }

    @JsonProperty("id")
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    @JsonProperty("USER_PASSWORD")
    public String getUSER_PASSWORD() {
        return USER_PASSWORD;
    }

    public void setUSER_PASSWORD(String USER_PASSWORD) {
        this.USER_PASSWORD = USER_PASSWORD;
    }

    @JsonProperty("USER_EMAIL")
    public String getUSER_EMAIL() {
        return USER_EMAIL;
    }

    public void setUSER_EMAIL(String USER_EMAIL) {
        this.USER_EMAIL = USER_EMAIL;
    }
}
