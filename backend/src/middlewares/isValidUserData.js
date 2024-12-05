

const isValidUserData = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Invalid user data" }
    )
  }
  return next();
};

export default isValidUserData