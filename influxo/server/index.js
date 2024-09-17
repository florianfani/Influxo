import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3001; // or any port you prefer

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Mailer function
const sendMail = async (req, res) => {
  const { subject, html } = req.body;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail", // e.g., 'gmail'
    auth: {
      user: "influxoks@gmail.com", // your email
      pass: process.env.GMAIL_APP_PASSWORD, // your email password from .env
    },
  });

  // Email options
  let mailOptions = {
    from: "influxoks@gmail.com", // sender address
    to: "influxoks@gmail.com", // list of receivers
    subject: subject, // Subject line
    html: html, // html body
  };

  // Send mail with defined transport object
  try {
    let info = await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent", info });
  } catch (error) {
    res.status(500).send({ message: "Error sending email", error });
  }
};

// Route to handle mail sending
app.post("/api/mail", sendMail);

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
