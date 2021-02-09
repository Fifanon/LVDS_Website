const express = require("express");
const db = require('../config/firebase-config');

const router = express.Router()

router.post('/livre', (req, res) => {
    id = req.body.bookId;
    var ref = db.ref("/livres/" + id);
    ref.once("value", function(snapshot) {
        var bk = snapshot.val();
        bk.category = "Livre"
        res.status(200).render('display.ejs', {
            book: bk
        });
    });
});

router.post('/livret', (req, res) => {
    id = req.body.bookId;
    var ref = db.ref("/livrets/" + id);
    ref.once("value", function(snapshot) {
        var bk = snapshot.val();
        bk.category = "Livret"

        res.status(200).render('display.ejs', {
            book: bk
        });
    });
});
module.exports = router;