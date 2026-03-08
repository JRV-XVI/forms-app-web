package com.springboot.backend.services;
import com.springboot.backend.model.Comic;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;

@Service
public class servicesComics {

    private List<Comic> comics = new ArrayList<>();
    private int nextId = 1;

    public List<Comic> getComics() {
        return comics;
    }

    public void addComic(Comic comic) {
        comics.add(comic);
    }

    public Comic createComic(String title, String author, int volume, String publisher, String datePublished, float price) {
        Comic comic = new Comic(nextId++, title, author, volume, publisher, datePublished, price);
        addComic(comic);
        return comic;
    }
}