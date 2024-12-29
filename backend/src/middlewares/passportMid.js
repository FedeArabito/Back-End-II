import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import dao from "../dao/index.factory.js"
import { createHash, verifyHash } from "../utils/hash.js";
import { createToken } from "../utils/token.js";
const { JWT_SECRET } = process.env

const userManager = dao;

passport.use("register",
  new LocalStrategy({ passReqToCallback: true, usernameField: "email" }, async (req, username, email, password, done) => {
    try {
      const user = await userManager.readByEmail(email);
      if (user) {
        return done(null, false, { message: "User already exists" });
      }
      const hashPassword = await createHash(password);
      const newUser = await userManager.create({ username, email, password: hashPassword });
      return done(null, newUser);
    } catch (error) {
      return done(error);
    }
  })
)

passport.use("login",
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await userManager.readByEmail(email);
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const passwordForm = password;
      const passwordDb = user.password;
      const verify = await verifyHash(passwordForm, passwordDb);
      if (!verify) {
        return done(null, false, { message: "Invalid credentials" });
      }
      const data = { user_id: user._id, username: user.username, email: user.email, role: user.role };
      const token = createToken(data);
      user.token = token;
      await update(user._id, { isOnline: true })
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
  )
)

passport.use("admin",
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromExtractors([(req) => req?.cookies?.token]),
    secretOrKey: "dfsdfsdfds"
  },
    async (data, done) => {
      try {
        const { user_id, role } = data;
        if (role !== "admin") {
          return done(null, false, { message: "Unauthorized" });
        }
        const user = await userManager.readById(user_id);
        return done(null, user);
      } catch (error) {

      }
    }
  )
)

passport.use("online",
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromExtractors([(req) => req?.cookies?.token]),
    secretOrKey: "dfsdfsdfds"
  },
    async (data, done) => {
      try {
        const { user_id } = data;
        const user = await userManager.readById(user_id);
        const { isOnline } = user;
        if (!isOnline) {
          const message = { message: "User is offline", statusCode: 401 };
          return done(null, false, message);
        }
        return done(null, user);
      } catch (error) {
        return done(error)
      }
    }
  )
)

passport.use(
  "signout",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([(req) => req?.cookies?.token]),
      secretOrKey: "dfsdfsdfds",
    },
    async (data, done) => {
      try {
        const { user_id } = data;
        await userManager.update(user_id, { isOnline: false });
        return done(null, { user_id: null });
      } catch (error) {
        return done(error);
      }
    }
  )
);



export default passport
