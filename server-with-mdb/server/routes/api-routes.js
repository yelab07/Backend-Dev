const router = require("express").Router();
const Todo = require("../models/todoModel");

const {
  getAllTodos,
  createNewTodo,
  updateText,
  updateCompleted,
  deleteTodo,
} = require("../controllers/todoController");

// get all the todos from mongodb using mongoose
router.get("/", getAllTodos);

router.post("/", createNewTodo);

// will update a Todo with mongoose. findByIdAndUpdate
router.put("/updatetext", updateText);
// will update a Todos completed status in mongoose. findByIdAndUpdate
router.put("/updatecompleted", updateCompleted);

// will delete a todo. findByIdAndDelete

router.put("/delete", deleteTodo);

module.exports = router;
