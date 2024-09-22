const pool = require('../db');

// 카드 등록 기능
exports.postcardregister = async (req, res) => {
    const { card_num, card_valid, card_company } = req.body;
    console.log("!!!!", req.session);

    const user_id = req.session.user_id;
    console.log("user_id: ", user_id);

    const [rows, field] = await pool.query(
        "insert into card(card_num, card_valid, card_company, user_id) values (?, ?, ?, ?)",
        [card_num, card_valid, card_company, user_id]
    );
    
    // return res.send('카드 등록 완료');
}


// 카드 목록
exports.getcardlist = async (req, res) => {
    console.log(req.session);
    const user_id = req.session.user_id;

    const [cards, schema] = await pool.query(
        "select * from card where user_id = ?",
        [user_id]
    );
    console.log("rows: ", cards);
    console.log("field: ", schema);

    res.send({
        message: 'cardlist',
        cards: cards
    });
}