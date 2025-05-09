import React, { useState, useEffect } from "react";
import axios from "axios";
import './BooksApp.css';

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [report, setReport] = useState({ totalCount: 0, genreCounts: {} });
  const [formData, setFormData] = useState({
    itemName: "",
    auther: "",
    genre: "",
    quantity: 0,
  });

  useEffect(() => {
    fetchBooks();
    fetchReport();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/v1/books");
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books", err);
    }
  };

  const fetchReport = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/v1/books/report");
      setReport(res.data);
    } catch (err) {
      console.error("Error fetching report", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/api/v1/books", formData);
      setFormData({ itemName: "", auther: "", genre: "", quantity: 0 });
      fetchBooks();
      fetchReport();
    } catch (err) {
      console.error("Error adding book", err);
    }
  };

  const createInput = (name, placeholder, type = "text") =>
    React.createElement("input", {
      type,
      name,
      placeholder,
      value: formData[name],
      onChange: handleChange,
      required: true,
      className: "form-input",
    });

  const renderForm = () =>
    React.createElement(
      "form",
      { onSubmit: handleSubmit, className: "form" },
      [
        createInput("itemName", "Book Name"),
        createInput("auther", "Author Name"),
        createInput("genre", "Genre"),
        createInput("quantity", "Quantity", "number"),
        React.createElement("button", { type: "submit", className: "submit-button" }, "Add Book"),
      ]
    );

  const renderTable = () =>
    React.createElement("table", { className: "book-table" }, [
      React.createElement("thead", {}, [
        React.createElement("tr", {}, [
          "ID",
          "Name",
          "Author",
          "Genre",
          "Quantity",
        ].map((text, idx) => React.createElement("th", { key: idx }, text))),
      ]),
      React.createElement("tbody", {}, books.map((book, idx) =>
        React.createElement("tr", { key: idx }, [
          React.createElement("td", {}, book.itemId),
          React.createElement("td", {}, book.itemName),
          React.createElement("td", {}, book.auther),
          React.createElement("td", {}, book.genre),
          React.createElement("td", {}, book.quantity),
        ])
      )),
    ]);

  const renderReport = () =>
    React.createElement("div", { className: "report-section" }, [
      React.createElement("h3", {}, "Book Report"),
      React.createElement("p", {}, `Total Books: ${report.totalCount}`),
      React.createElement("ul", {}, Object.entries(report.genreCounts).map(([genre, count], idx) =>
        React.createElement("li", { key: idx }, `${genre}: ${count}`)
      )),
    ]);

  return React.createElement("div", { className: "container" }, [
    React.createElement("h2", {}, "Add New Book"),
    renderForm(),
    React.createElement("h2", {}, "Books List"),
    renderTable(),
    renderReport(),
  ]);
};

export default BooksApp;
