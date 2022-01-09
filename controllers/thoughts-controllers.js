const { Thoughts, User } = require("../models");

thoughtsControllers = {
  getThoughts(req, res) {
    Thoughts.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((dbThoughtsData) => {
        res.json(dbThoughtsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  getThoughtsById({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thought found for this id" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
