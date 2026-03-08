// src/main/java/com/springboot/backend/model/Comic.java
package com.springboot.backend.model;

public class Comic {
    private Integer id;
    private String title;
    private Integer volume;
    private String publisher;
    private String datePublished;
    private Float price;

    public Comic() {}

    public Comic(Integer id, String title, Integer volume, String publisher, String datePublished, Float price) {
        this.id = id;
        this.title = title;
        this.volume = volume;
        this.publisher = publisher;
        this.datePublished = datePublished;
        this.price = price;
    }

    // Getters y Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public int getVolume() { return volume; }
    public void setVolume(int volume) { this.volume = volume; }
    public String getPublisher() { return publisher; }
    public void setPublisher(String publisher) { this.publisher = publisher; }
    public String getDatePublished() { return datePublished; }
    public void setDatePublished(String datePublished) { this.datePublished = datePublished; }
    public float getPrice() { return price; }
    public void setPrice(float price) { this.price = price; }
}
