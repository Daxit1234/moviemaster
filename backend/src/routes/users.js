const exprees = require("express");
const router = exprees.Router();
const User = require("../models/user");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { error } = require("console");
const { Route } = require("react-router-dom");

let sendEmailForOtp = (userEmail) => {
  // Generate a random 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change this to your email service provider
    auth: {
      user: "dakshitgodhani103@gmail.com", // Your email address
      pass: "uerv dnou gtjz wuut", // Your email password or app-specific password
    },
  });

  // Function to send OTP via email
  const sendOTP = (email, otp) => {
    const mailOptions = {
      from: "dakshitgodhani103@gmail.com", // Your email address
      to: email,
      subject: "Your One-Time Password (OTP)",
      text: `Your OTP is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };
  const otp = generateOTP();
  sendOTP(userEmail, otp);
  return otp;
};

//ROUTE:1 create a user using post:http://localhost:3000/users/createuser
let verification;
router.post("/createuser",async (req, res) => {
  userdata = User(req.body);
  const { email }=userdata
  const checkemail=await User.findOne({email})
  if(checkemail){ 
   return res.send({error:"email id already exist"});  
  }
  global.otp = sendEmailForOtp(userdata.email);
  res.send({userdata})
});

//ROUTE:2 create a user using post:http://localhost:8080/users//verifyotp/:otp
router.post("/verifyotp/:userotp",async (req, res) => {
  const userotp = req.params.userotp;
  userotp === global.otp ? (verification = true) : (verification = false);
  if (verification) {
    userdata
      .save()
      .then(() => {
         res.send(userdata);
      })
      .catch((e) => {
         res.send({error:"email id already exist"});
      });
  } else {
    res.send({error:"your opt is incorrect"});
  }
});

//ROUTE:3 resend otp using get:http://localhost:8080/users//resendotp/:daxitgodhani303@gmail.com
router.get("/resendotp/:email",async (req, res) => {
  const email = req.params.email;
  global.otp = sendEmailForOtp(email);
  res.send("otp send successfully")
});

//ROUTE:4 verify otp using get:http://localhost:8080/users/verifyotpforget/:otp
router.get("/verifyotpforget/:otp",async (req, res) => {
  const otp = req.params.otp;
  otp === global.otp ? res.send(true) : res.send(false);
});



//ROUTE:2 login user using get:http://localhost:3000/users/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ error: "Please try to login with correct email" });
  }
  if (password != user.password) {
    return res.status(400).json({ error: "Please enter valid password" });
  }
  res.send(user);
});

//Rounte 3:forget password using post:http://localhost:3000/users/forgetPass/:email
router.post("/forgetPass", async (req, res) => {
  const { email, newpassword } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Email id dose not exist" });
  }
  const filter = { email: email };
  const updateData = { $set: { password: newpassword } };
  await User.updateOne(filter, updateData);
  res.json({ success: "password updated" });
});

//ROuTE 4: get all user data for admin
router.get("/getUserDetails", async (req, res) => {
  let user = await User.find();
  res.send(user);
});

//ROUTE:5: delete tickets using get:http://localhost:3000/users/delete  for admin
router.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("deleted");
});

module.exports = router;
