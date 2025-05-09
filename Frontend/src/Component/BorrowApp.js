import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BorrowingApp = () => {
    const [borrowerName, setBorrowerName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [borrowedDate, setBorrowedDate] = useState('');
    const [returningDate, setReturningDate] = useState('');
    const [itemId, setItemId] = useState('');
    const [itemName, setItemName] = useState('');
    const [auther, setAuther] = useState('');
    const [genre, setGenre] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [borrowings, setBorrowings] = useState([]);

    useEffect(() => {
        const fetchBorrowings = async () => {
            try {
                const response = await axios.get('http://localhost:8081/borrow');
                setBorrowings(response.data);
                console.log('Fetched borrowings:', response.data); // Debug line
            } catch (error) {
                console.error('Error fetching borrowings:', error);
            }
        };

        fetchBorrowings();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const borrowData = {
            borrowerName,
            address,
            contact,
            borrowedDate,
            returningDate,
            book: {
                itemId,
                itemName,
                auther,
                genre,
                quantity
            }
        };

        try {
            const response = await axios.post('http://localhost:8081/borrow', borrowData);
            console.log('Book borrowed successfully:', response.data);

            // Reset form
            setBorrowerName('');
            setAddress('');
            setContact('');
            setBorrowedDate('');
            setReturningDate('');
            setItemId('');
            setItemName('');
            setAuther('');
            setGenre('');
            setQuantity(1);

            // Add new entry to the list
            setBorrowings([...borrowings, response.data]);
        } catch (error) {
            console.error('Error borrowing the book:', error);
        }
    };

    return (
        <div>
           <h1 style={{ color: "darkblue" }}>Borrow System</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Borrower Name</label>
                    <input
                        type="text"
                        value={borrowerName}
                        onChange={(e) => setBorrowerName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contact</label>
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Borrowed Date</label>
                    <input
                        type="date"
                        value={borrowedDate}
                        onChange={(e) => setBorrowedDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Returning Date</label>
                    <input
                        type="date"
                        value={returningDate}
                        onChange={(e) => setReturningDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Book ID</label>
                    <input
                        type="number"
                        value={itemId}
                        onChange={(e) => setItemId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Book Name</label>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author</label>
                    <input
                        type="text"
                        value={auther}
                        onChange={(e) => setAuther(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Genre</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Borrow Book</button>
            </form>

            <h2>Borrowed Books</h2>
            <ul>
                {borrowings
                    .filter(b => b.book) // filter out entries with missing book info
                    .map((borrowing, index) => (
                        <li key={index}>
                            <p><strong>Borrower:</strong> {borrowing.borrowerName}</p>
                            <p><strong>Book:</strong> {borrowing.book?.itemName}</p>
                            <p><strong>Author:</strong> {borrowing.book?.auther}</p>
                            <p><strong>Borrowed Date:</strong> {borrowing.borrowedDate}</p>
                            <p><strong>Returning Date:</strong> {borrowing.returningDate}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default BorrowingApp;
