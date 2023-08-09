const register = async (req, res) => {
  res.send("register user");
};

const login = async (req, res) => {
  res.send("user logged in");
};

module.exports = {
  register,
  login,
};
