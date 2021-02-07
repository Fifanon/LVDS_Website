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


app.use(function(req, res, next) {
    const error = new Error('Page cannot be found');
    error.status() = 404;
    next(error);
})

//sending back error messages.
//all the errors thrown with the next() ifromn the routes will be
//handled here 
app.use((error, req, res, next) => {
        res.status(error.status).json({ message: error.message });
    })
    /**
     * Server Activation
     */
app.listen(port, () => {
    console.log('Listening to requests on http://localhost:${port}');
});