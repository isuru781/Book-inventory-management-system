package com.session02.newpos.controller;


import com.session02.newpos.Repo.BookRepository;
import com.session02.newpos.Servise.BookService;
import com.session02.newpos.entities.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController

@RequestMapping("api/v1/books")

@CrossOrigin


public class BooksController {
    @Autowired private BookRepository bookRepo;

    @Autowired
    BookService bookService;

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @GetMapping
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/report")
    public Map<String, Object> genreReport() {
        Map<String, Object> report = Map.of(
                "totalCount", bookRepo.count(),
                "genreCounts", bookRepo.findAll().stream()
                        .collect(Collectors.groupingBy(Book::getGenre, Collectors.counting()))
        );
        return report;
    }
}


