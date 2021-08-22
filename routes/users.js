const express = require("express");
const router = express.Router();
const User = require("../models/user");

const tokenService = require("../services/auth");
const passwordService = require("../services/password");

// route for user registration (Add user)-> register
router.post("/register", async (req, res, next) => {
  try {
    // console.log(req.body);
    let newUser = new User({
      username: req.body.username,
      password: passwordService.hashPassword(req.body.password),
    });

    let token = tokenService.assignToken(newUser);
    let result = await newUser.save();
    console.log(result);
    res.json({
      massage: "User created successfully",
      status: 200,
      token,
    });
    // console.log(result);
  } catch (err) {
    console.log(err);
    res.json(
      {
        massage: "Something went wrong",
        status: 403,
      },
      403
    );
  }
});
//route for login -> login
router.post("/login", async (req, res, next) => {
  // console.log(req.body);
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) {
      console.log(err);
      res.json({
        massage: "Error Accessing Database",
        status: 500,
      });
    }
    if (user) {
      let passwordMatch = passwordService.comparePasswords(
        req.body.password,
        user.password
      );
      if (passwordMatch) {
        let token = tokenService.assignToken(user);
        res.json({
          message: "Login was successful",
          status: 200,
          token,
        });
      } else {
        res.json(
          {
            massage: "Wrong password",
            status: 403,
          },
          403
        );
      }
    } else {
      res.json(
        {
          massage: "Wrong username",
          status: 403,
        },
        403
      );
    }
  });
});
//route to get user profile information -> profile
router.get("/profile", async (req, res, next) => {
  // console.log(req.headers);
  let myToken = req.headers.authorization;
  console.log(myToken);

  if (myToken) {
    let currentUser = await tokenService.verifyToken(myToken);
    console.log(currentUser);

    if (currentUser) {
      let responseUser = {
        username: currentUser.username,
        delete: currentUser.delete,
        admin: currentUser.admin,
      };

      res.json({
        message: "User Profile information loaded successfully",
        status: 200,
        user: responseUser,
      });
    } else {
      res.json({
        message: "Token was invalid or expired",
        status: 403,
      });
    }
  } else {
    res.json({
      message: "No token received",
      status: 403,
    });
  }
});
module.exports = router;
