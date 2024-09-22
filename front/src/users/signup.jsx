import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../container.css';

function Signup() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        user_id: '',
        password: '',
        confrimpassword: '',
        name: ''
    })

    const postData = () => {
        const { password, confrimpassword } = userData;

        if (password != confrimpassword) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        axios
            .post('http://localhost:8080/signup',{...userData})
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.error(err);
                alert('아이디가 중복됩니다');
            })
    }


    function UserDataChange(e) {
        const {name, value} = e.target;
        setUserData(prev => (
            {
                ...prev,
                [name]: value
            }
        ));
    }

    return (
        <div className="container">
            <input name="user_id" type="text" id="user_id" placeholder="아이디를 입력하세요" onChange={UserDataChange} /> <br />
            <input name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={UserDataChange} /><br />
            <input name="confrimpassword" type="password" placeholder="비밀번호를 재입력하세요" onChange={UserDataChange} /><br />
            <input name="name" type="text" id="name" placeholder="이름을 입력하세요" onChange={UserDataChange} /> <br />
            <button onClick={postData}>등록</button>
        </div>
    );
}

export default Signup;