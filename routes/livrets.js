const express = require("express");
const db = require('../config/firebase-config');

const router = express.Router()

router.get('/', (req, res) => {
    var ref = db.ref("/livrets")
    ref.once("value", function(snapshot) {
        var bks = snapshot.val();
        var books = []
        for (var i = 0; i < Object.entries(bks).length; i++) {
            books[i] = Object.entries(bks)[i][1]
        }
        res.status(200).render('livrets.ejs', {
            books: books
        })
    })
})

module.exports = router