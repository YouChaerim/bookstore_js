import React, { useEffect, useState } from "react";
import axios from "axios";
import '../container.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const [books, setBooks] = useState([]);
    const [userId, setUserId] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8080');
                setBooks(response.data.books);
                setUserId(response.data.user_id);
            } catch (error) {
                console.error("데이터를 가져오는 데 오류가 발생했습니다:", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="container">
            <h1>BOOK STORE</h1>
            <p>안녕하세요 {userId}님!</p>
            <table>
                <thead>
                    <tr>
                        <th>책 제목</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.book_id}>
                            <td onClick={()=>{navigate(`/detail/${book.book_id}`)}}>{book.book_name}</td>
                            <td>{book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;

