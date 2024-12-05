import { readByEmail } from "../data/managers/userManager";




const isValidEmail = async(req, res, nex)=>{
  const {email} = req.body;
  const user = await readByEmail(email);
  if(!user){
    const error = new Error("Invalid Credentialas");
    error.statusCode = 401;
    throw error
  }
  return next();
}

export default isValidEmail