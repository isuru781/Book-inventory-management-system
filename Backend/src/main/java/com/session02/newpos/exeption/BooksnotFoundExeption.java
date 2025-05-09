package com.session02.newpos.exeption;


public class BooksnotFoundExeption extends RuntimeException {
    public BooksnotFoundExeption(String message) {
        super(message);
    }
}
