package com.springboot.backend.controller;

import org.springframework.web.bind.annotation.*;
import com.springboot.backend.services.serviceCreateComics;
import com.springboot.backend.services.serviceGetComics;

@RestController
@RequestMapping("/api/comics")
public class ControllerComics {

    private serviceCreateComics serviceCreateComics;
    private serviceGetComics serviceGetComics;

    @PostMapping
    public String createComics() {
        return serviceCreateComics.createComics();
    }

    @GetMapping
    public String getComics() {
        return serviceGetComics.getComics();
    }
}
