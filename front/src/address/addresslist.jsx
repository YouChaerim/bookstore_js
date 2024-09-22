import React, { useEffect, useState } from "react";
import axios from "axios";

function Addresslist() {
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await axios.get('http://localhost:8080/addresslist', { withCredentials: true });
                setAddress(response.data.address);
            } catch (error) {
                console.log("데이터를 가져오는데 오류가 발생했습니다: ", error);
            }
        };

        fetchAddress();
    }, []);

    return (
        <div className="container">
            <p>주소 목록</p>
            <table>
                <thead>
                    <tr>
                        <th>우편번호</th>
                        <th>기본 주소</th>
                        <th>상세 주소</th>
                    </tr>
                </thead>
                <tbody>
                    {address.map(address => (
                        <tr key={address.address_id}>
                            <td>{address.postal_code}</td>
                            <td>{address.basic_address}</td>
                            <td>{address.detail_address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Addresslist;