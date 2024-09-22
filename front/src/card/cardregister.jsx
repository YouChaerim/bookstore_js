import React, { useState } from "react";
import axios from "axios";
import '../container.css';

function Cardregister() {
    const [cardData, setCardData] = useState({
        card_num: '',
        card_valid: '',
        card_company: ''
    })

    const onClickPostCardData = () => {
        axios
            .post('http://localhost:8080/cardregister', {...cardData})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function CardDataChange(e) {
        const {name, value} = e.target;
        setCardData(prev => (
            {
                ...prev,
                [name]: value
            }
        ));
    }

    return (
        <div className="container">
            <input name="card_num" type="text" id="card_num" placeholder="카드 번호를 입력해주세요" onChange={CardDataChange} /> <br />
            <input name="card_valid" type="text" placeholder="유효기간을 입력해주세요" onChange={CardDataChange} /> <br />
            <input name="card_company" type="text" placeholder="카드 회사를 입력해주세요" onChange={CardDataChange}/>
            <button onClick={onClickPostCardData}>카드 등록</button>
        </div>
    );

    // const CardDataChange2 = function(){

    // }
    // const CardDataChange3 = new Function('x','y','x+y');
}

export default Cardregister;