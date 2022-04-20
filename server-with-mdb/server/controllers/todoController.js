const Todo = require("../models/todoModel");

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const myTodos = await Todo.find({});
      res.json(myTodos);
    } catch (err) {
      res.json({ msg: err });
    }
  },

  createNewTodo: async (req, res) => {
    try {
      const newTodo = new Todo({ text: req.body.text, completed: false });
      res.json(await newTodo.save());
    } catch (err) {
      res.json({ msg: err });
    }
  },

  updateText: async (req, res) => {
    try {
      const updateResponse = await Todo.findByIdAndUpdate(req.body.id, {
        text: req.body.text,
      });

      if (updateResponse !== null) return res.json({ msg: "success" });
      res.json({ msg: "wrong id sent" });
    } catch (err) {
      res.json({ msg: err });
    }
  },

  updateCompleted: async (req, res) => {
    try {
      const updateResponse = await Todo.findByIdAndUpdate(req.body.id, {
        completed: req.body.completed,
      });

      if (updateResponse !== null) return res.json({ msg: "success" });
      res.json({ msg: "wrong id sent" });
    } catch (err) {
      res.json({ msg: err });
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const deleteResponse = await Todo.findByIdAndDelete(req.body.id);

      if (deleteResponse !== null) return res.json({ msg: "success" });
      res.json({ msg: "wrong id sent" });
    } catch (err) {
      res.json({ msg: err });
    }
  },
};
