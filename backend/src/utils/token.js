import jwt from "jsonwebtoken";

export const createToken = (user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

export const tokenExpiration = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: 1,
  })
  return token
};