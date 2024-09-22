import React, { useEffect, useState } from "react";
import axios from "axios";
import '../container.css';
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const [cartlist, setCartlist] = useState([]);

    useEffect(() => {
        const fetchCartlist = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cartlist');
                setCartlist(response.data.cartlist);
            } catch (error) {
                console.log("데이터를 가져오는데 오류가 발생했습니다: ", error);
            }
        };

        fetchCartlist();
    }, []);

    const onClickChangeQuantity = (cartItem_id) => {
        console.log(cartItem_id)
        axios
            .post('http://localhost:8080/changeitem', {cartItem_id})
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.error(err);
            })
        window.location.reload();
    }

    const onClickOrder = () => {
        navigate('/cartorder');
    }

    return (
        <div className="container">
            <h1>장바구니</h1>
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
                                <input type="number" name="quantity" value={cartlist.quantity} max={cartlist.stock}  onChange={()=>onClickChangeQuantity(cartlist.cartItem_id)}/>
                                <td>{cartlist.quantity * cartlist.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </thead>
            </table>
            <button onClick={onClickOrder}>주문하기</button>
        </div>
    );
}

export default Cart;