import { genSaltSync, hashSync, compareSync } from "bcrypt";

const createHash =  (password) => {
    const salt = genSaltSync(10);
    const hashpasword = hashSync(password, salt);
    return hashpasword;
}

const verifyHash = (password, dbPassword) => {
  const verify = compareSync(password, dbPassword);
  return verify;
}

export {createHash, verifyHash};