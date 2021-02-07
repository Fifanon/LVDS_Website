const express = require("express");
const db = require('../config/firebase-config');

const router = express.Router()

router.get('/livres/:bookId', (req, res) => {
    id = req.params.bookId
    var ref = db.ref("/livres/" + id)
    ref.once("value", function(snapshot) {
        var bks = snapshot.val();
        console.log(Object.entries(bks))

        res.status(200).render('display.ejs', {
            books: books
        })
    })
})

router.get('/livrets/:bookId', (req, res) => {
    console.log(req.body);
    ref.once("value", function(snapshot) {
        var bks = snapshot.val();
        var books = []
        books[0] = bks
        console.log(books)
        res.status(200).render('display.ejs', {
            books: books
        })
    })
})
module.exports = router