import React, { useEffect, useState } from "react";
import '../container.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CartOrder() {
    const navigate = useNavigate();
    const [cartlist, setCartlist] = useState([]);
    const [card, setCard] = useState([]);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/orderpage');
                setCartlist(response.data.cartlist);
                setCard(response.data.card);
                setAddress(response.data.address);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h3>주문하기</h3>
            <table>
                <thead>
                    <tr>
                        <th>책제목</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>
                    <tbody>
                        {cartlist.map(cartlist => (
                            <tr key={cartlist.cartItem_id}>
                                <td>{cartlist.book_name}</td>
                                <td>{cartlist.quantity}</td>
                                <td>{cartlist.quantity * cartlist.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </thead>
            </table>
            <p>카드 선택하기</p>
            <select>
                {card.map(card => (
                    <option value={card.card_num}>{card.card_num}</option>
                ))}
            </select>
            <p>주소 선택하기</p>
            <select>
                {address.map(address => (
                    <option value={address.postal_code}>{address.postal_code}</option>
                ))}
            </select>
        </div>
    );
}

export default CartOrder;