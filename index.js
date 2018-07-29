const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;
app.listen(PORT);


//clientID 501401801625-m1gi04b2c0b92il9774b9appnfdg1jce.apps.googleusercontent.com
// client secret cJEVbp9dQ58Yoc6sMiEGfzoe
