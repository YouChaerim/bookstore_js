const pool = require('../db');

// signup 기능
exports.postsignup = async (req, res) => {
    const { user_id, password, name } = req.body;
    console.log("아이디: ", user_id);

    const saveUser = await pool.query(
        "insert into user(user_id, password, name) values (?, ?, ?)",
        [user_id, password, name]
    );
    return res.send('회원가입 완료');
}

// signin 기능
exports.postsignin = async (req, res) => {
    const { user_id, password } = req.body;
    console.log("아이디: ", user_id);

    const findByUserId = await pool.query(
        "select * from user where user_id = ?",
        [user_id]
    );
    console.log(findByUserId);

    if (findByUserId == 0) {
        res.send('존재하지 않는 아이디');
    }

    const user = findByUserId[0][0];
    if (password != user.password) {
        res.send('비밀번호가 일치하지 않음')
    }

    req.session.user_id = user.user_id;
    req.session.name = user.name;

    console.log("!!!", req.session);

    return res.send('로그인 완료');
}

// 로그아웃
exports.getlogout = async (req, res) => {
    if(req.session) {
        req.session.destroy(()=> {
            res.redirect('/');
        });
    } else {
        console.log("세션이 없음");
    }
}