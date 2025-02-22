const nodemailer = require("nodemailer");

exports.sendEmail = async (to, qrCode) => {
  const transporter = nodemailer.createTransport({ service: "Gmail", auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS } });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: "Your Event Entry Pass",
    html: `<p>Thank you for RSVPing! Here is your entry pass:</p><img src="${qrCode}" alt="QR Code" />`,
  });
};
