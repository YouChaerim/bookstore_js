const pool = require('../db');

// 주문하기 페이지
exports.getorderpage = async (req, res) => {
    console.log("주문하기");
    const user_id = req.session.user_id;

    const [cart] = await pool.query(
        "select cart_id from cart where user_id = ?",
        [user_id]
    );

    const [cartlist] = await pool.query(
        "select * from cartitem inner join book on cartitem.book_id = book.book_id where cart_id = ?",
        [cart[0].cart_id]
    );

    const [card] = await pool.query(
        "select * from card where user_id = ?",
        [user_id]
    );
    console.log(card);

    const [address] = await pool.query(
        "select * from address where user_id = ?",
        [user_id]
    );

    res.send({
        message: 'cartorder',
        cartlist: cartlist,
        card: card,
        address: address,
    });
}