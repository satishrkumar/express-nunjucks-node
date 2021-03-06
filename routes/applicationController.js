const express = require("express");
const {validationResult } = require("express-validator");
const router = express.Router();
const { createUser } = require("../common/createUser");
const { goToHome } = require("../common/goToHome");
const { validation } = require("../common/validation");
const { newUser, postUserRequest } = require("../common/userConstant");

//user application home page
router.get("/", function (req, res) {
  const userPayload = newUser();
  goToHome(res, userPayload, null);
});

router.post(
  "/apply",
  validation,
  (req, res) => {
    const errors = validationResult(req);
    const userPayload = postUserRequest(req);
    if (!errors.isEmpty()) {
      const extractedErrors = [];
      errors.array().map((err) => extractedErrors.push({ ["msg"]: err.msg }));
      goToHome(res, userPayload, extractedErrors);
    } else {
      createUser(userPayload);
      res.render("welcome.html", {
        userPayload,
      });
    }
  }
);

module.exports = router;

