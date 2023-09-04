// import nodemailer from "nodemailer";
var nodemailer = require("nodemailer");

export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  console.log("sending email");

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });

  // await new Promise((resolve, reject) => {
  //   // send mail
  //   transporter.sendMail(mailOptions, (err, response) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(response);
  //     }
  //   });
  // });
}
