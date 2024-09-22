import React, { useEffect, useState } from "react";
import axios from "axios";

function Cardlist() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cardlist');
                setCards(response.data.cards);
            } catch (error) {
                console.error("데이터를 가져오는데 오류가 발생했습니다: ", error);
            }
        };

        fetchCards();
    }, []);

    return (
        <div className="container">
            <p>카드 목록</p>
            <table>
                <thead>
                    <tr>
                        <th>카드 번호</th>
                        <th>유효 기간</th>
                        <th>카드 회사</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(card => (
                        <tr key={card.card_num}>
                            <td>{card.card_num}</td>
                            <td>{card.card_valid}</td>
                            <td>{card.card_company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Cardlist;
