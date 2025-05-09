package com.session02.newpos.entities;

import jakarta.persistence.*;

import java.time.LocalDate;


@Entity
@Table(name = "borrowings")

public class Borrowing {

    @Id
    @Column(name = "item_id",length =45 )
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int itemId;

    @Column(name="borrower Name")
    private String borrowerName;

    @Column(name="address")
    private String address;


    @Column(name="contact")
    private String contact;


    @Column(name="borrowedDate")
    private LocalDate borrowedDate;

    @Column(name="returning date")
    private LocalDate returningDate;

    @ManyToOne
    private Book book;


    public Borrowing(int itemId, Book book, LocalDate borrowedDate, String address, String borrowerName, String contact, LocalDate returningDate) {
        this.itemId = itemId;
        this.book = book;
        this.borrowedDate = borrowedDate;
        this.address = address;
        this.borrowerName = borrowerName;
        this.contact = contact;
        this.returningDate = returningDate;
    }

    public Borrowing() {
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public LocalDate getReturningDate() {
        return returningDate;
    }

    public void setReturningDate(LocalDate returningDate) {
        this.returningDate = returningDate;
    }

    public LocalDate getBorrowedDate() {
        return borrowedDate;
    }

    public void setBorrowedDate(LocalDate borrowedDate) {
        this.borrowedDate = borrowedDate;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBorrowerName() {
        return borrowerName;
    }

    public void setBorrowerName(String borrowerName) {
        this.borrowerName = borrowerName;
    }

    @Override
    public String toString() {
        return "Borrowing{" +
                "itemId=" + itemId +
                ", borrowerName='" + borrowerName + '\'' +
                ", address='" + address + '\'' +
                ", contact='" + contact + '\'' +
                ", borrowedDate=" + borrowedDate +
                ", returningDate=" + returningDate +
                ", book=" + book +
                '}';
    }
}
