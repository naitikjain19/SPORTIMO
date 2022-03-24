const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  console.log("serial")
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("deserial")
  User.findById(id).then(user => {
    console.log(user)
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id, email: profile.emails[0].value}).save();
      done(null, user);
    }
  )
);

const authenticateUser =async (username,password,done)=>{
  const newUser = await User.findOne({email:username},(err) => {
    if(err){
      res.send(err)
    }
  })
  console.log(newUser)
  if(newUser){
    if(newUser.password == password){
    console.log(newUser)
      return done(null, newUser)
    }else{
      return done(null, false, {message:"Invalid password"})
    }
  }else{
    return done(null, false, {message:"User not found"})
  }

}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField:'password'
  },authenticateUser)
);