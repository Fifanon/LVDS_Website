const express = require("express");
const db = require('../config/firebase-config');

const router = express.Router()

router.get('/', (req, res) => {
    var ref = db.ref("/livres")
    ref.once("value", function(snapshot) {
        var bks = snapshot.val();
        var books = []
        for (var i = 0; i < Object.entries(bks).length; i++) {
            books[i] = Object.entries(bks)[i][1]
        }
        console.log(books)
        res.status(200).render('livres.ejs', {
            books: books
        })
    })
})

module.exports = router