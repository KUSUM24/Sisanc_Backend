const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  },
});
const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
