const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = require("../config");
const User = require("../models/User");
const passport = require("passport");
const { Strategy } = require("passport-discord");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: "/auth/redirect",
      scope: ["identify", "guilds"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ discordId: profile.id });

        if (user) return done(null, user);

        const newUser = new User({
          discordId: profile.id,
          username: profile.username,
          guilds: profile.guilds,
        });
        done(null, newUser);

        await newUser.save();
      } catch (error) {
        console.error(error);
        return done(error, null);
      }
    }
  )
);
