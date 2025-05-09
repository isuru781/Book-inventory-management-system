package com.session02.newpos.Servise;


import com.session02.newpos.Repo.BookRepository;
import com.session02.newpos.entities.Book;
import com.session02.newpos.exeption.BooksnotFoundExeption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // Add a new book
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    // Get all books
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Generate report: count books by genre
    public Map<String, Long> getBooksCountByGenre() {
        return bookRepository.findAll().stream()
                .collect(Collectors.groupingBy(Book::getGenre, Collectors.counting()));
    }

    // Get total number of books
    public long getTotalBookCount() {
        return bookRepository.count();
    }

    // Find book by ID
    public Optional<Book> getBookById(Long id) {
        try {
            return bookRepository.findById(id);
        } catch (Exception e) {
            throw new BooksnotFoundExeption("Failed to retrieve book with ID: " + id);
        }

    }
}

