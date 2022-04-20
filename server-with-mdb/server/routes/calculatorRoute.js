const router = require("express").Router();
const Calc = require("../models/calcModel");
const {
  all,
  add,
  subtract,
  multiply,
  divide,
} = require("../controllers/calcController");

router.get("/", all);
router.put("/add", add);
router.put("/subtract", subtract);
router.put("/multiply", multiply);
router.put("/divide", divide);

module.exports = router;
// subtract
// multiply,
// devide, subtract, multiply, devide
