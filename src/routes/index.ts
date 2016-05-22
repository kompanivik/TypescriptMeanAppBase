/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');

let router = express.Router();

router.get('*', (req, res) => {
            res.sendFile('../public/index.html');
});


export = router;