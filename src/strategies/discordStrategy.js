const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = require("../config");
const User = require("../models/User");
const passport = require("passport");
const { Strategy } = require("passport-discord");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: "/auth/redirect",
      scope: ["identify", "guilds"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);

      try {
        const newUser = new User({
          discordId: profile.id,
          username: profile.username,
          guilds: profile.guilds,
        });
        done(null, newUser);
      } catch (error) {
        console.error(error);
        return done(error, null);
      }
    }
  )
);
