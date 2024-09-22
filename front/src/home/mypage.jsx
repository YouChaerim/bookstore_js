import React from "react";
import '../container.css';
import Cardlist from "../card/cardlist";
import Addresslist from "../address/addresslist";
import Cardregister from "../card/cardregister";
import Addressregister from "../address/addressregister";

function Mypage() {
    return (
        <div className="container">
            <h1>MY PAGE</h1>
            <Cardlist />
            <Cardregister />
            <Addresslist />
            <Addressregister />
        </div>
    );
}

export default Mypage;