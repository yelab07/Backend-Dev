const router = require("express").Router();
const Todo = require("../models/todoModel");
const { findByIdAndDelete } = require("../models/todoModel");

// const db = require("../models");

// get all the todos from mongodb using mongoose
router.get("/", async (req, res) => {
  try {
    const myTodos = await Todo.find({});
    res.send(myTodos);
  } catch (error) {
    res.json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text, completed: false });
    res.json(await newTodo.save());
  } catch (err) {
    res.json({ msg: err });
  }
});

// will update a Todo with mongoose. findByIdAndUpdate
router.put("/updatetext", async (req, res) => {
  try {
    const updateResponse = await Todo.findByIdAndUpdate(req.body.id, {
      text: req.body.text,
    });

    if (updateResponse !== null) return res.json({ msg: "success" });
    res.json({ msg: "wrong id sent" });
  } catch (err) {
    res.json({ msg: err });
  }
});
// will update a Todos completed status in mongoose. findByIdAndUpdate
router.put("/updatecompleted", async (req, res) => {
  try {
    const updateResponse = await Todo.findByIdAndUpdate(req.body.id, {
      completed: req.body.completed,
    });
    // console.log(this.updateResponse);
    if (updateResponse !== null) return res.json({ msg: "success" });
    res.json({ msg: "wrong id sent" });
  } catch (err) {
    res.json({ msg: err });
  }
});

// will delete a todo. findByIdAndDelete

router.put("/delete", async (req, res) => {
  try {
    const deleteResposne = await Todo.findByIdAndDelete(req.body.id);

    if (deleteResposne !== null) return res.json({ msg: "success" });
    res.json({ msg: "wrong id sent" });
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
