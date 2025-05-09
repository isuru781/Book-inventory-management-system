package com.session02.newpos.Servise;

import com.session02.newpos.Repo.BorrowingRepository;
import com.session02.newpos.entities.Borrowing;
import com.session02.newpos.exeption.BorrowingNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowingService {

    @Autowired
    private BorrowingRepository borrowingRepository;

    // Add a new borrowing record
    public Borrowing addBorrowing(Borrowing borrowing) {
        try {
            return borrowingRepository.save(borrowing);
        } catch (Exception e) {
            throw new RuntimeException("Failed to save borrowing record", e);
        }
    }

    // Get all borrowing records
    public List<Borrowing> getAllBorrowings() {
        try {
            return borrowingRepository.findAll();
        } catch (Exception e) {
            throw new BorrowingNotFoundException("Failed to retrieve borrowing records");
        }
    }


}
