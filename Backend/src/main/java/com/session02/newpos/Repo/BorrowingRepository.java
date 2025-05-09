package com.session02.newpos.Repo;

import com.session02.newpos.entities.Borrowing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowingRepository extends JpaRepository<Borrowing, Long> {


}