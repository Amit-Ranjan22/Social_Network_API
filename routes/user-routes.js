const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../controllers/user-controllers");

router.route("/").get(getAllUsers).post(createUser);
