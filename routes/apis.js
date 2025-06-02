const express = require('express');
const about = require('../controller/about')
const contact = require('../controller/contact')
const signup = require('../controller/signup')
const login = require('../controller/login');
const verify = require('../controller/verify');

const router = express.Router();

router.get('/about',about)

router.get('/contact',contact)

router.post('/signup',signup)

router.get('/login',login)

router.get('/verify',verify)

module.exports=router;