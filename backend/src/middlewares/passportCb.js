import passport from "./passportMid.js";

export default (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(info.statusCode || 400).json({ statusCode: info.statusCode || 400, message: info.message || "Invalid credentials" });
      }
      req.user = user;
      return next();
    })(req, res, next);
  };
}
