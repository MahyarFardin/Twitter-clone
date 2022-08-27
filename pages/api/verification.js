const express = require("express");
const nev = require("node-email-verificator");

const server = express();

nev.config("gmail", "example@gmail.com", "passw0rde");

server.post("/", (req, res) => {
  nev.send("reciever@yahoo.com");
  res.sendFile("./confirm.html");
});

server.post("/confirm", (req, res) => {
  let code = req.body.code;

  if (nev.verify(code)) {
    //if successful
    res.sendFile("./success.html");
  } else {
    // if error
    res.sendFile("./index.html", { message: "Please Try Again" });
  }
});

server.listen(3000, () => console.log("Using NEV on port 3000"));
