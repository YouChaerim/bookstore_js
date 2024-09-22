import React from "react";
import './container.css';
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="container">
            <div>
                <Link to="/">메인</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="/signin">로그인</Link>
                <Link to="/mypage">마이페이지</Link>
                <Link to="/cart">장바구니</Link>
            </div>
        </div>
    );
}

export default Header;