var nodemailer = require('nodemailer');
require('dotenv').config() //importing .env file


exports.sendMail = function (req, res) {
    
   

    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    });
    //taking data from body
    var mail = {
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    }


    transporter.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: ");
            res.end("sent");
        }
    });
}
