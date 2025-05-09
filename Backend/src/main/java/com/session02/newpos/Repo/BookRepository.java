package com.session02.newpos.Repo;

import com.session02.newpos.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
//    List<Book> findByGenre(String genre);
    long count();
}
