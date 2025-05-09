package com.session02.newpos.controller;

import com.session02.newpos.Repo.BorrowingRepository;
import com.session02.newpos.Servise.BorrowingService;
import com.session02.newpos.entities.Borrowing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/borrow")
public class BorrowController {
    @Autowired
    private BorrowingRepository borrowRepo;

    @Autowired
    BorrowingService borrowingService;

    @PostMapping
    public Borrowing borrowBook(@RequestBody Borrowing borrow) {
        System.out.println("Borrowing book: " + borrow);
        return borrowingService.addBorrowing(borrow);
    }

    @GetMapping
    public List<Borrowing> getBorrowDetails() {
        System.out.println("Fetching all borrowings");
        return borrowingService.getAllBorrowings();
    }
}
