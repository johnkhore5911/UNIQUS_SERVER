require('dotenv').config({ path: '../config.env' });
const nodemailer = require('nodemailer');

const sendEmail = (options) => {

    return new Promise((resolve, reject) => {
        // 1) Create a transporter
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        // 2) Define the email options
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: options.to,
            subject: options.subject,
            html: options.html
        };

        // 3) Actually send the email
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                reject(err); // Reject the Promise if there's an error
            } else {
                resolve({ status: "success" }); // Resolve the Promise if email is sent successfully
            }
        });
    });
}
module.exports = sendEmail;