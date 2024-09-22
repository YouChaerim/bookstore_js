import React, { useState } from "react";
import axios from "axios";
import '../container.css';
import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate();

    const [userInData, setUserInData] = useState({
        user_id: '',
        password: ''
    })

    const postData = () => {
        axios
            .post('http://localhost:8080/signin', {...userInData}, { withCredentials: true })
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                alert('아이디 또는 비밀번호를 확인해주세요');
            })
    }

    function UserDataChange(e) {
        const {name, value} = e.target;
        setUserInData(prev => (
            {
                ...prev,
                [name]: value
            }
        ));
    }

    return (
        <div className="container">
                <input name="user_id" type="text" id="user_id" placeholder="아이디를 입력하세요" onChange={UserDataChange} /> <br/>
                <input name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={UserDataChange}/><br />
                <button onClick={postData}>등록</button>
        </div>
    );
}

export default Signin;