require('dotenv').config({path: './config.env'});
const passport = require('passport');
const  JWTStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies){
        token = req.cookies['access_token'];
    }
    ""(token);
    return token;
}

passport.use(new JWTStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET,
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.id);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;


