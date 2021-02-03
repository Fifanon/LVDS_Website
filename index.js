/**
 * Required External Modules
 */
const express = require('express')
const path = require("path");
const firebase = require("firebase");
require("dotenv").config()
    /*Routes*/
const livresRouter = require("./routes/livres")
const livretsRouter = require("./routes/livrets")
const displayBksRouter = require("./routes/display")




/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.use(express.static(path.join(__dirname, "src")));
app.set('views', __dirname + '/src/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
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
app.use('/display/', displayBksRouter);


/**
 * Server Activation
 */
app.listen(port, () => {
    console.log('Listening to requests on http://localhost:${port}');
});