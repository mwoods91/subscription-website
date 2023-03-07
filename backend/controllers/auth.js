const User = require("../models/user");
const Record = require("../models/record");
const EmailVerificationToken = require("../models/emailVerificationToken");
const { sendError } = require("../utils/helper");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const request = require("request");

exports.register = async (req, res) => {
  try {
    // validation
    const { client_reference_id, fullname, dob, email, phone } = req.body;
    console.log(req.body);
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }

    const exist = await User.findOne({ email });
    if (exist)
      return sendError(
        res,
        "It Looks like this account already exists! please login"
      );

    // create account in stripe
    const customer = await stripe.customers.create({
      email,
    });
    // console.log("stripe customer created on signup", customer);

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
      const confirmtoken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      //   console.log(user);
      const { password, ...rest } = user._doc;
      return res.json({
        record: rest,
        confirmtoken,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return sendError(
      res,
      "Are you sure you entered the correct email associated with this account?"
    );

  // Generate a random 6-digit OTP code
  const otpCode = Math.floor(100000 + Math.random() * 900000);

  var options = {
    method: "POST",
    url: "https://api.releans.com/v2/message",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImZmZDZlN2E2LTU3MzAtNDFiZi1iMTM3LTNjMjEwNDhhNmJkYiIsImlhdCI6MTY3MTczOTk2NCwiaXNzIjoxNTE4NX0.5rqDT4bLY6VipJ8RnKWw04fe7Flamxbhpk9CMskUHqI",
    },
    form: {
      sender: "heartrhythm",
      mobile: user.phone.replace("0", "+353"),
      content: `Your OTP code is ${otpCode}`,
    },
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

  const newEmailVerificationToken = new EmailVerificationToken({
    owner: user,
    token: otpCode,
  });

  await newEmailVerificationToken.save();

  // const msg = {
  //   to: user.email, // recipient email address
  //   from: "markwoodsy1991@gmail.com", // sender email address
  //   subject: "Your OTP code", // email subject
  //   text: `Your OTP code is ${otpCode}.`, // plain text body of the email
  // };

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log(`OTP code sent to ${msg.to}`);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  res.json({
    request,
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

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      if (!user) return sendError(res, "User Not Found!");
    }

    user.prefix = req.body.prefix || user.prefix;
    user.fullname = req.body.fullname || user.fullname;
    user.address1 = req.body.address1 || user.address1;
    user.address2 = req.body.address2 || user.address2;
    user.county = req.body.county || user.county;
    user.eircode = req.body.eircode || user.eircode;
    user.gender = req.body.gender || user.gender;
    user.dob = req.body.dob || user.dob;
    user.phone = req.body.phone || user.phone;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();

    console.log(updatedUser);
    res.json({
      _id: updatedUser._id,
      prefix: updatedUser.prefix,
      fullname: updatedUser.fullname,
      address1: updatedUser.address1,
      address2: updatedUser.address2,
      county: updatedUser.county,
      eircode: updatedUser.eircode,
      gender: updatedUser.gender,
      dob: updatedUser.dob,
      phone: updatedUser.phone,
      email: updatedUser.email,
    });
  } catch (err) {
    console.log(err);
  }
};
