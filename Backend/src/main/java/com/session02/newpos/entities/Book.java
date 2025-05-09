package com.session02.newpos.entities;

import jakarta.persistence.*;

@Entity

@Table(name = "Books")
public class Book {


    @Id
    @Column(name = "item_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int itemId;

    @Column(name = "Book_title")
    private String itemName;

    @Column(name = "author")
    private String auther;


    @Column(name = "genre")
    private String genre;

    @Column(name = "quantity")
    private int quantity;


    public Book() {
    }

    public Book(int itemId, int quantity, String auther, String itemName, String genre) {
        this.itemId = itemId;
        this.quantity = quantity;
        this.auther = auther;
        this.itemName = itemName;
        this.genre = genre;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getAuther() {
        return auther;
    }

    public void setAuther(String auther) {
        this.auther = auther;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
