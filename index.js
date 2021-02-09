/**
 * Required External Modules
 */
const express = require('express')
const path = require("path");
const db = require('./config/firebase-config');

const firebase = require("firebase");
var bodyParser = require('body-parser')
require("dotenv").config()




/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join('src')));
app.set('views', __dirname + '/src/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/*Routes*/
const displayRouter = require("./routes/display")
const livresRouter = require("./routes/livres")
const livretsRouter = require("./routes/livrets")
    /**
     * Routes Definitions
     */
app.get('/', (req, res) => {
    res.status(200).render('index.html')
});
app.get('/contact-us', (req, res) => {
    res.status(200).render('operations.html')
});
app.use('/livres', livresRouter);
app.use('/livrets', livretsRouter);

app.post('/afficher/livret', (req, res) => {
    console.log(req)
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

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log('Listening to requests on http://localhost:${port}');
});