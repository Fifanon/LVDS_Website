/**
 * Required External Modules
 */
const express = require('express')
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.use(express.static(path.join(__dirname, "src")));
/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    res.status(200).render('index.html')
})
app.get('/contact-us', (req, res) => {
    res.status(200).render('operations.html')
})

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log('Listening to requests on http://localhost:${port}');
});