import { createHash } from "../utils/hash.js";

const createHashMiddleware = async (req, res, next) => {
  const { password } = req.body;
  const hashPassword = await createHash(password);
  req.body.password = hashPassword;
  next();
};

export default createHashMiddleware;