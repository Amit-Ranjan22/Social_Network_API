const router = require('express').Router();

const {
  getThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  removeReaction,
} = require("../controllers/thoughts-controllers");

router.route("/").get(getThoughts).post(createThoughts);