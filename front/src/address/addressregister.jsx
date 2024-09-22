import React, { useState } from "react";
import axios from "axios";
import '../container.css';

function Addressregister() {
    const [ addressData, setAddressData ] = useState({
        postal_code: '',
        basic_address: '',
        detail_address: ''
    })

    const onClickPostAddressData = () => {
        axios
            .post('http://localhost:8080/addressregister', {...addressData})
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function AddressDataChange(e) {
        const {name, value} = e.target;
        setAddressData(prev => (
            {
                ...prev,
                [name]: value
            }
        ));
    }

    return (
        <div className="container">
            <input name="postal_code" type="text" placeholder="우편번호를 입력하세요" onChange={AddressDataChange} /> <br />
            <input name="basic_address" type="text" placeholder="주소를 입력하세요" onChange={AddressDataChange} /> <br />
            <input name="detail_address" type="text" placeholder="상세주소를 입력하세요" onChange={AddressDataChange} />
            <button onClick={onClickPostAddressData}>주소 등록</button>
        </div>
    );
}

export default Addressregister;