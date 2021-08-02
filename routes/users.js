var express = require("express");
var router = express.Router();
var User = require("../models/user");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// route for user registration (Add user)-> register
router.post("/register", async (req, res, next) => {
  try {
    console.log(req.body);
    let newUser = new User({
      firstName: req.body.firtsName,
      lastName: req.body.lastName,
      email: req.body.email,
      userName: req.body.userName,
      password: req.body.password,
    });
    console.log(newUser);
  } catch (err) {}
});
//route for login -> login
router.post("/login", async (req, res, next) => {});
//route to get user profile information -> profile
router.get("/profile", async (req, res, next) => {});
module.exports = router;
