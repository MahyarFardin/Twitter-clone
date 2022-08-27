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

//============================================nima code====================================


const nodemailer = require('nodemailer')
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "08a11853132a9c",
    pass: "c59bf12e778907"
  }
}); 

let nima = 'nimamahini81@gmail.com'
let mahyar = 'mahyarfardinfar@gmail.com'

const option = {
  from:mahyar,
  to:mahyar,
  subject:'test',
  text:'verify message'
}

transport.sendMail(option , function(e , data){
  if (e) {
    return console.log(e);
  }
  console.log('email sent , data :'+data);
})

server.listen(3000, () => console.log("Using NEV on port 3000"));
