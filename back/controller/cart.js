const pool = require('../db');

// 장바구니 검색후 있는 경우와 없는 경우 (-> 장바구니 생성) 장바구니 아이디 반환
const exists_cart = async (user_id) =>{
    const [findCart] = await pool.query(
        "select * from cart where user_id = ?",
        [user_id]
    );
    console.log(findCart);

    if(findCart.length === 0){
        const newCart = await pool.query(
            "insert into cart(user_id, create_date) values (?, now())",
            [user_id]
        );
        return newCart[0].insertId;
    } else {
        return findCart[0].cart_id;
    }
}

// 장바구니 검색하고 추가하기
exports.postcartadd = async (req, res) => {
    const user_id = req.session.user_id;
    const book_id = req.body.book_id;
    console.log('book_id: ', book_id);

    cart_id = await exists_cart(user_id);

    console.log('cart_id : ', cart_id);
    
    const [cartitembook] = await pool.query(
        "select * from cartitem where book_id = ? and cart_id = ?",
        [book_id, cart_id]
    );
    console.log('!!', cartitembook)

    if (cartitembook.length < 1){
        const addcartitem = await pool.query(
            "insert into cartitem(book_id, cart_id, quantity) values (?, ?, 1)",
            [book_id, cart_id]
        );
    } else {
        const changecartitem = await pool.query(
            "update cartitem set quantity = quantity + 1 where book_id = ? and cart_id = ?",
            [book_id, cart_id]
        );
    }

}

// 장바구니 목록
exports.getcartlist = async (req, res) => {
    console.log('장바구니 페이지');

    const user_id = req.session.user_id;
    const [cart] = await pool.query(
        "select cart_id from cart where user_id = ?",
        [user_id]
    );
    console.log(cart[0]);

    const [cartlist] = await pool.query(
        "select * from cartitem inner join book on cartitem.book_id = book.book_id where cart_id = ?",
        [cart[0].cart_id]
    );

    res.send({
        message: 'cart',
        cartlist: cartlist
    })
}

// 장바구니 아이템 수량 변경
exports.postchangeitem = async (req, res) => {
    const { cartItem_id } = req.body;
    console.log("!!", cartItem_id );

    const changecartitem = await pool.query (
        "update cartitem set quantity = quantity + 1 where cartItem_id = ?",
        [cartItem_id]
    );
}