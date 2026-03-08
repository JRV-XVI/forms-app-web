package com.springboot.backend.controller;

import org.springframework.web.bind.annotation.*;
import com.springboot.backend.services.servicesComics;
import com.springboot.backend.model.Comic;
import java.util.List;

@RestController
@RequestMapping("/api/comics")
public class ControllerComics {

    private final servicesComics servicesComics;

    public ControllerComics(servicesComics servicesComics) {
        this.servicesComics = servicesComics;
    }

    @PostMapping
    public Comic createComic(@RequestBody Comic comicData) {
        return servicesComics.createComic(
            comicData.getTitle(),
            null,  // author parameter (not stored in model)
            comicData.getVolume(),
            comicData.getPublisher(),
            comicData.getDatePublished(),
            comicData.getPrice()
        );
    }

    @GetMapping
    public List<Comic> getComics() {
        return servicesComics.getComics();
    }
}
