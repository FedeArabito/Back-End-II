import { verifyHash } from "../utils/hash.js";

const verifyHashMiddleware = async ( req, res, next)=>{
  const {password, email} = req.body;
  const user = await readByEmail(email);
  const passwordDB = user.password;
  const verify = await verifyHash(password, passwordDB);
  if(!verify){
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error
  }
  return next();
}

export default verifyHashMiddleware;