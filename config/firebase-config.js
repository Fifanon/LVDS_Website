require("firebase/auth");
const firebase = require('firebase')
const admin = require('firebase-admin');

const serviceAccount = require("./lavoiedusalut-52cf6-firebase-adminsdk-ncdl3-dbbacb369f.json");

var firebaseConfig = {
    apiKey: "AIzaSyDbtemrsxbkUmleQah_kzK6NfSbp1QBW7w",
    authDomain: "lavoiedusalut-52cf6.firebaseapp.com",
    databaseURL: "https://lavoiedusalut-52cf6-default-rtdb.firebaseio.com",
    projectId: "lavoiedusalut-52cf6",
    storageBucket: "lavoiedusalut-52cf6.appspot.com",
    messagingSenderId: "816504009105",
    appId: "1:816504009105:web:6e52da511fee61ab7aea30",
    measurementId: "G-NHN5DPQK1H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
});
var database = firebase.database();

module.exports = database;