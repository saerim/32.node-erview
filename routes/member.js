const express = require('express');
const router = express.Router();

router.get('/join', (req, res) => {
	res.render('member/join.pug', {file: "member"});
});
router.get('/login', (req, res) => {
	res.render('member/login.pug', {file: "member"});
});
router.get('/logout', (req, res) => {
	res.render('member/logout.pug', {file: "member"});
});  

module.exports = router;