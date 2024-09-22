const express = require('express');
const router = express.Router();
const indexCtrl = require('../controller/controller');
const userCtrl = require('../controller/users');
const cardCtrl = require('../controller/card');
const addressCtrl = require('../controller/address');
const bookCtrl = require('../controller/book');
const cartCtrl = require('../controller/cart');
const orderCtrl = require('../controller/order');



router.get('/', indexCtrl.gethome); 

router.post('/signup', userCtrl.postsignup);
router.post('/signin', userCtrl.postsignin);
router.get('/logout', userCtrl.getlogout);

router.post('/cardregister', cardCtrl.postcardregister);
router.get('/cardlist', cardCtrl.getcardlist);

router.get('/addresslist', addressCtrl.getaddresslist);
router.post('/addressregister', addressCtrl.postaddressregiser);

router.get('/detail/:book_id', bookCtrl.getbookdetail);

router.post('/cartadd', cartCtrl.postcartadd);
router.get('/cartlist', cartCtrl.getcartlist);
router.post('/changeitem', cartCtrl.postchangeitem);

router.get('/orderpage', orderCtrl.getorderpage);

module.exports = router;