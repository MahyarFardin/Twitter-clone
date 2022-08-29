const express = require("express");
const nodemailer = require("nodemailer");
const email = "./index";

const server = express();

module.export = function sendMail(reciver) {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "08a11853132a9c",
      pass: "c59bf12e778907",
    },
  });

  const option = {
    from: "mahyarfardinfar@gmail.com",
    to: reciver,
    subject: "verification email",
    html: email,
  };

  transport.sendMail(option, function (e, data) {
    if (e) {
      return console.log(e);
    }
    console.log("email sent , data :" + data);
  });
};
server.listen(3001, () => console.log("Using NEV on port 3001"));
