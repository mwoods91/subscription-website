const User = require("../models/user");
const EmailVerificationToken = require("../models/emailVerificationToken");
const Record = require("../models/record");
const { isValidObjectId } = require("mongoose");
const { sendError } = require("../utils/helper");
// const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.register = async (req, res) => {
  try {
    // validation
    const { client_reference_id, fullname, dob, email, phone } = req.body;
    if (!email) {
      return res.json({
        error: "Name is required",
      });
    }
    // if (!password || password.length < 6) {
    //   return res.json({
    //     error: "Password is required and should be 6 characters long",
    //   });
    // }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken",
      });
    }
    // hash password
    // const hashedPassword = await hashPassword(password);

    // create account in stripe
    const customer = await stripe.customers.create({
      metadata: {
        client_reference_id,
      },
      email: email,
      name: fullname,
    });

    console.log("stripe customer created on signup", customer);

    try {
      const user = await new User({
        client_reference_id,
        fullname,
        dob,
        email,
        phone,
        stripe_customer_id: customer.id,
      }).save();

      const record = await new Record({
        patient_record: user._id,
      }).save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      //   console.log(user);
      const { ...rest } = user._doc;
      console.log(...rest);
      return res.json({
        token,
        record: rest,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

// exports.login = async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) return sendError(res, "Mobile Not Found!");

//   // const matched = await comparePassword(req.body.password, user.password);
//   // if (!matched) return sendError(res, "Email/Password mismatch!");

//   // create signed token
//   const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });

//   const { ...rest } = user._doc;

//   res.json({
//     token,
//     user: rest,
//   });
// };

exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "Email Not Found!");

  // Generate a random 6-digit OTP code
  const otpCode = Math.floor(100000 + Math.random() * 900000);

  const newEmailVerificationToken = new EmailVerificationToken({
    owner: user,
    token: otpCode,
  });

  await newEmailVerificationToken.save();

  const msg = {
    to: user.email, // recipient email address
    from: "markwoodsy1991@gmail.com", // sender email address
    subject: "Your OTP code", // email subject
    text: `Your OTP code is ${otpCode}.`, // plain text body of the email
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log(`OTP code sent to ${msg.to}`);
    })
    .catch((error) => {
      console.error(error);
    });

  res.json({
    otpCode,
    // user: rest,
  });
};

exports.verifyEmail = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "Email Not Found!");

  console.log(user, otp);

  const token = await EmailVerificationToken.findOne({ owner: user._id });
  if (!token) return sendError(res, "token not found!");

  console.log(token);

  const isMatched = await token.compareToken(otp);
  if (!isMatched) return sendError(res, "Please submit a valid OTP!");

  // user.isVerified = true;
  // await user.save();

  await EmailVerificationToken.findByIdAndDelete(token._id);
  console.log(token);

  const confirmtoken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const { ...rest } = user._doc;

  res.json({
    confirmtoken,
    user: rest,
  });
};
