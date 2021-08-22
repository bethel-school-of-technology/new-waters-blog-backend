const express = require("express");
const app = express();

//  app.get("/", function(req, res) {
//      res.send("Expresso iso hero")
//  })

app.user("/users", require("./routes/usersRoute"));

app.listen(5000, function () {
  console.log("Beam me up! Port 5000 > is running");
});
