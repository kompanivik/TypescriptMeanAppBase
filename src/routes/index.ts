/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');

let router = express.Router();

router.get('*', (req, res) => {
            res.sendFile(__dirname + '/../public/index.html');
            //res.render(__dirname + '/../public/index.html');
});


export = router;