const isAdmin = async (req, res, next) => {
  const { role } = req.token;
  if (!role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" }
    )
  }
  return next();
};

export default isAdmin