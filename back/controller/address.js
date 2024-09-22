const pool = require('../db');

// 주소 목록
exports.getaddresslist = async (req, res) => {
    const user_id = req.session.user_id;

    const address = await pool.query(
        "select * from address where user_id = ?",
        [user_id]
    );
    console.log(address[0]);

    res.send({
        message: 'addresslist',
        address: address[0]
    });
}

// 주소 등록
exports.postaddressregiser = async (req, res) => {
    const { postal_code, basic_address, detail_address } = req.body;
    
    const user_id = req.session.user_id;
    console.log("user_id: ", user_id);

    const address = await pool.query(
        "insert into address(postal_code, basic_address, detail_address, user_id) values (?, ?, ?, ?)",
        [postal_code, basic_address, detail_address, user_id]
    );

    res.send('주소 등록 완료');
}