<h1 align="center">📚 Simple Book Inventory System</h1>

<p align="center">
  <b>A full-stack web application for managing a simple book inventory system using <code>Spring Boot</code> and <code>React</code>.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/backend-Spring%20Boot-green?logo=springboot" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/frontend-React-blue?logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/build-Maven-orange?logo=apachemaven" alt="Maven"/>
</p>

---

## 🚀 Features

- **Add Book**  
  Add books with details like <b>Title</b>, <b>Author</b>, <b>Genre</b>, and <b>Quantity</b>.
- **Add Borrowing Details**  
  Record borrower's <b>Name</b>, <b>Address</b>, <b>Contact</b>, <b>Borrowed Date</b>, and <b>Return Date</b>.
- **View Inventory**  
  View a list of all books and their current availability.  
  Display all borrowing history.
- **Generate Reports**  
  Generate reports showing total number of books and genre-wise distribution.

---

## 🛠️ Tech Stack

| Layer     | Technology        |
|-----------|-------------------|
| 🎯 Backend  | Java, Spring Boot |
| 🎨 Frontend | React             |
| 🧰 Tools    | Maven, REST APIs  |

---

## 🧑‍💻 Getting Started

### 🖥 Backend Setup (Spring Boot)

1. Navigate to the backend folder:
    ```
    cd backend
    ```
2. Run the Spring Boot application:
    ```
    ./mvnw spring-boot:run
    ```
    > Ensure your application connects to a running MySQL instance or H2 (for in-memory DB).

---

### 🌐 Frontend Setup (React)

1. Navigate to the frontend folder:
    ```
    cd frontend
    ```
2. Install dependencies and start the development server:
    ```
    npm install
    npm start
    ```
    > The React app will be available at [http://localhost:3000](http://localhost:3000)

---

## 📦 Project Structure

## 📦 Project Structure

```
simple-book-inventory-system/
│
├── backend/ # Spring Boot backend application
│   ├── src/
│   └── pom.xml
│
├── frontend/ # React frontend application
│   ├── src/
│   └── package.json
│
└── README.md
```

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests for improvements or bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Built with [Spring Boot](https://spring.io/projects/spring-boot) and [React](https://react.dev/)
- Inspired by the need for simple and effective inventory management

---

> Happy coding! If you find this project useful, please ⭐️ the repo and share your feedback!
