const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const indexData = require('./index');

const router = express.Router();

router.post('/users', (req, res, next) => {
    console.log(indexData.users);
    res.render('users', {users: indexData.users,
        pageTitle: 'Users',
        path: '/users'
    });
 });

 module.exports = router;