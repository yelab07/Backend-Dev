const Calc = require("../models/calcModel");

module.exports = {
  all: async (req, res) => {
    try {
      const allUsers = await Calc.find({});
      res.json(allUsers);
    } catch (err) {
      res.json({ msg: err });
    }
  },
  add: async (req, res) => {
    try {
      const addend = new Calc({
        a: req.body.a,
        b: req.body.b,

        c: parseInt(req.body.a) + parseInt(req.body.b),
      });
      console.log(addend);
      res.json(await addend.save());
    } catch (err) {
      res.json({ msg: err });
    }
  },
  subtract: async (req, res) => {
    try {
      const subt = new Calc({
        a: req.body.a,
        b: req.body.b,

        c: parseInt(req.body.a) - parseInt(req.body.b),
      });
      console.log(subt);
      res.json(await subt.save());
    } catch (err) {
      res.json({ msg: err });
    }
  },
  multiply: async (req, res) => {
    try {
      const mult = new Calc({
        a: req.body.a,
        b: req.body.b,

        c: parseInt(req.body.a) * parseInt(req.body.b),
      });
      console.log(mult);
      res.json(await mult.save());
    } catch (err) {
      res.json({ msg: err });
    }
  },
  divide: async (req, res) => {
    try {
      const divi = new Calc({
        a: req.body.a,
        b: req.body.b,

        c: parseInt(req.body.a) / parseInt(req.body.b),
      });
      console.log(divi);
      res.json(await divi.save());
    } catch (err) {
      res.json({ msg: err });
    }
  },
};
