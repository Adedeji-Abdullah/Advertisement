const admin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({
      message: "Admin access only"
    });
  }

  next();
};

module.exports = admin;
