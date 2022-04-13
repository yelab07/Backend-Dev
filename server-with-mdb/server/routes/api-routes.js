const router = require("express").Router();
const Todo = require("../models/todoModel");

// get all the todos from mongodb using mongoose
router.get("/", async (req, res) => {});

router.post("/", async (req, res) => {
  const newTodo = new Todo({ text: req.body.text, completed: false });
  res.json(await newTodo.save());
});

// will update a Todo with mongoose. findByIdAndUpdate
router.put("/update", (req, res) => {});

// will delete a todo. findByIdAndDelete
router.put("/delete", (req, res) => {});

module.exports = router;
