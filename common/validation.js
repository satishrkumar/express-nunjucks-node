const { check } = require("express-validator");

const validation = [
  check("name")
    .isLength({ min: 1, max: undefined })
    .withMessage("Name should not be blank"),
  check("age")
    .isLength({ min: 1, max: undefined })
    .withMessage("Age should not be blank"),
  check("gender")
    .isLength({ min: 1, max: undefined })
    .withMessage("Gender should not be blank"),
  check("country")
    .isLength({ min: 1, max: undefined })
    .withMessage("Country should not be blank"),
  check("age").isNumeric().withMessage("Age should be number"),
];
exports.validation = validation;
