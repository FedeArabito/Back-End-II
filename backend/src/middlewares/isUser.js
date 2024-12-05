import { readByEmail } from "../data/managers/userManager.js";


const isAlreadyUser = async (req, res, nect)=>{
  const { email } = req.body;
  const user = await readByEmail(email);
  if(user){
    const error = new Error("User already exists");
    error.statusCode = 400;
    throw error
  }
  return next();
}

export default isAlreadyUser