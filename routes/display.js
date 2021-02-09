const express = require("express");
const db = require('../config/firebase-config');

const router = express.Router()

router.post('/livre', (req, res) => {
    id = req.body.bookId;
    var ref = db.ref("/livres/" + id);
    ref.once("value", function(snapshot) {
        var bk = snapshot.val();
        var book = []
        for (var i = 0; i < Object.entries(bk).length; i++) {
            book = [i] = Object.entries(bk)[i][1];
            book[i].bookId = Object.entries(bk)[i][0];

        };
        res.status(200).send('display.ejs', {
            book: book
        });
    });
});

router.post('/livret', (req, res) => {
    id = req.body.bookId;
    var ref = db.ref("/livrets/" + id);
    ref.once("value", function(snapshot) {
        var bk = snapshot.val();
        console.log(bk);
        res.status(200).render('display.ejs', {
            book: bk
        });
    });
});
module.exports = router;