import React, { useEffect, useState } from "react";
import axios from "axios";
import '../container.css';
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
    const navigate = useNavigate();
    const {book_id} = useParams();
    const [bookdetail, setBookdetail] = useState([]);

    useEffect(() => {
        const fetchBookDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/detail/${book_id}`);
                setBookdetail(response.data.bookdata);
            } catch (error) {
                console.error("데이터를 가져오는데 오류가 발생했습니다: ", error);
            }
        };

        fetchBookDetail();
    }, []);

    const onClickPostBookData = () => {
        axios
            .post('http://localhost:8080/cartadd', {...bookdetail}, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        navigate('/cart');
    }

    return (
        <div className="container">
            <h2>상세페이지</h2>
            <h3>{bookdetail.book_name}</h3>
            <p>가격: {bookdetail.price}</p>
            <p>수량: {bookdetail.stock}</p>
            <button onClick={onClickPostBookData}>장바구니에 담기</button>
            <button>바로주문</button>
        </div>
    );
}

export default Detail;