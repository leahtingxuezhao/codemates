require("dotenv").config();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = process.env;

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, email, password, profile_pic } = req.body;
    const result = await db.get_user(username);
    if (result[0]) {
      return res.status(409).send("User already registered.");
    }
    console.log("result :", result);
    const salt = bcrypt.genSaltSync(10);
    console.log("password :", password);
    console.log("username :", username);
    const hash = bcrypt.hashSync(password, salt);
    const user = await db.register_user([username, email, hash, profile_pic]);
    console.log("user :", user);
    if (user[0]) {
      delete user[0].hash;
    }
    req.session.user = user[0];
    res.status(200).send(req.session.user);
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const result = await db.get_user(username);
    const user = result[0];
    if (!user) {
      return res.status(401).send("User not found.");
    }
    const isAuthenticated = bcrypt.compareSync(password, user.hash);
    if (!isAuthenticated) {
      return res.status(403).send("Incorrect password.");
    }
    delete user.hash;
    req.session.user = user;
    console.log("this is user :", user);
    res.status(200).send(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser: (req, res) => {
    console.log("req", req);
    if (!req.session.user) {
      return res.status(401).send("No user found");
    } else {
      res.status(200).send(req.session.user);
    }
  },

  email: async (req, res) => {
    console.log("req.body :", req.body);
    const { email } = req.body;
    let message = "Thank you for registering your account!";
    let image =
      "https://i.kym-cdn.com/entries/icons/mobile/000/005/608/nyan-cat-01-625x450.jpg";
    // "https://i.etsystatic.com/17857814/r/il/5e775c/1612229339/il_570xN.1612229339_bj2s.jpg"

    try {
      // console.log(EMAIL)
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });
      let info = await transporter.sendMail(
        {
          from: EMAIL,
          to: `<${email}>`,
          subject: "Register",
          text: message,
          html: `<div>${message}</div>
                   <img src="cid:unique@nodemailer.com"/>`,

          attachments: [
            {
              filename: "license.txt",
              path:
                "https://raw.github.com/nodemailer/nodemailer/master/LICENSE"
            },
            {
              cid: "unique@nodemailer.com",
              path: image
            }
          ]
        },
        (err, res) => {
          if (err) {
            console.log("err", err);
          } else {
            console.log("res", res);
            res.status(200).send(info);
          }
        }
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
};
