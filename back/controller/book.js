const pool = require('../db');

// 책 상세페이지
exports.getbookdetail = async (req, res) => {
    const book_id = req.params.book_id;
    console.log(book_id);

    const bookdata = await pool.query(
        "select * from book where book_id = ?",
        [book_id]
    );
    console.log(bookdata[0][0]);

    res.send({
        message: 'detail',
        bookdata: bookdata[0][0]
    });
}