const pool = require('../db');


/**
 * home 화면
 */
exports.gethome = async (req, res) => {
  console.log("책 목록 페이지");
  console.log("!!!", req.session);

  const user_id = req.session.user_id;
  console.log(user_id);

  const books = await pool.query("select * from book");
  console.log(books[0]);

  res.send({
    message: 'home',
    user_id: user_id,
    books: books[0]
  });
}