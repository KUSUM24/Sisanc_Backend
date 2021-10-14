const express = require("express");
const router = express.Router();
const ContactUser = require("../schema/contactSchema");
const sendEmail = require("../services/email");

router.get("/", (req, res) => {
  res.send("contact");
});

router.post("/", (req, res) => {
  let { name, mobile } = req.body;
  // sendEmail.sendContactEmail(name, mobile);
  console.log(name, mobile);
  const newUser = new ContactUser({
    name,
    mobile: parseInt(mobile),
  });
  newUser
    .save()
    .then(() => {
      console.log("done");
      res.json({
        status: "true",
        message: "Thank you for connecting to us.",
      });
    })
    .catch((e) => {
      console.log(e);
      res.json({
        status: "false",
        error: "Please try again later.",
      });
    });
});

module.exports = router;
