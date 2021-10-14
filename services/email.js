let transporter = nodemailer.createTransport({
  service: "gmail",
  pool: true,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});
const sendContactEmail = () => {
  let mailOptions = {
    from: process.env.user,
    to: JSON.parse(process.env.admin),
    subject: "Sisanc Services",
    html: `<h1>Hello World</h1>`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(`email send: ${info.response}`);
  });
};
