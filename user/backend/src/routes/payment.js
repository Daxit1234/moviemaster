const Payment = require("../models/payment");
const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

let sendEmailForComfirm = (userEmail) => {

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change this to your email service provider
    auth: {
      user: "dakshitgodhani103@gmail.com", // Your email address
      pass: "uerv dnou gtjz wuut", // Your email password or app-specific password
    },
  });

  // Function to send OTP via email
  const sendmail = (email) => {
    const mailOptions = {
      from: "dakshitgodhani103@gmail.com", // Your email address
      to: email,
      subject: "Ticket Comfirmation",
      text: `Your Payment are successfull , Ticket are Comfirm Thanks You`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };
  sendmail(userEmail);
};

// Require the Twilio module and create a Twilio client
const accountSid = 'AC053d6e77b2a34371e8645d7958ecda80';
const authToken = 'b012b6ab967f4a0b1887bcfb07f010fc';
const client = require('twilio')(accountSid, authToken);
const twilioNumber = '+17694472372';

// Function to send SMS
function sendSMS(to, message) {
    client.messages
        .create({
            body: message,
            from: twilioNumber,
            to: to
        })
        .then(message => console.log(`SMS sent with message SID: ${message.sid}`))
        .catch(err => console.error(`Error sending SMS: ${err}`));
}



// ROUTE 1: add payment using POST http://localhost:8080/payment/addpayment
router.post("/addpayment", async (req, res) => {
  try {
    const payment = new Payment(req.body);
    sendSMS("+91"+payment.contactNo, `your Payment are successfull , Payment id is ${payment.paymentId}`);
    sendEmailForComfirm(payment.email)
    await payment.save();
    res.status(201).send(payment);
  } catch (e) {
    res.status(400).send(e);
  }
});

// ROUTE 2: get payment using GET http://localhost:8080/cinemas/getowner
router.get("/getpayment", async (req, res) => {
  try {
    const payment = await Payment.find();
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    // Calculate startIndex and endIndex for slicing the data
    const totalData = payment.length;
    const startIndex = Math.max(totalData - page * pageSize, 0);
    const endIndex = Math.max(totalData - (page - 1) * pageSize, 0);

    // Extract the data for the current page in reverse order
    const results = payment.slice(startIndex, endIndex).reverse();

    res.status(201).send({ results, totalData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/getallowner", async (req, res) => {
  try {
    let payment = await Payment.find();
    res.send(payment);
  } catch (error) {
    res.send({ error: error });
  }
});

// ROUTE 4: delete payment using GET http://localhost:8080/cinemas/deletecinema
router.delete("/deleteowner/:id", async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.status(201).send({ success: "payment are deketed" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
