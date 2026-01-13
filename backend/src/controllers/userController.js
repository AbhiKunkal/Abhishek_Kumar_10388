const User = require("../models/User");

const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

const updateProfile = async (req, res) => {
  const { name } = req.body;

  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name) user.name = name;
  await user.save();

  res.status(200).json({ message: "Profile updated successfully" });
};

const deleteProfile = async (req, res) => {
  await User.findByIdAndDelete(req.user.id);
  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getProfile,
  updateProfile,
  deleteProfile,
};
