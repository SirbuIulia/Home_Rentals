const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (toEmail, subject, verificationCode) => {
    if (!toEmail || typeof toEmail !== 'string' || !toEmail.includes('@')) {
        console.error('Invalid or missing recipient email:', toEmail);
        throw new Error('Invalid or missing recipient email');
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "homerentals480@gmail.com",
            pass: " vbwh vuym satd lzvb"
        },
    });

    const mailOptions = {
        from: `"Home Rentals" <${process.env.EMAIL_USERNAME}>`,
        to: toEmail,
        subject: subject,
        html: `<html><body>
                <p>Stimate utilizator,</p>
                <p>Ai solicitat resetarea parolei pentru contul tău. Folosește codul de mai jos pentru a continua procesul de resetare:</p>
                <p><strong>Cod de resetare: ${verificationCode}</strong></p>
                <p>Te rugăm să introduci acest cod în cadrul aplicației pentru a-ți seta o nouă parolă.</p>
                <p>Dacă nu ai solicitat resetarea parolei, te rugăm să ignori acest e-mail.</p>
                <p>Cu respect,<br> Echipa Home Rentals</p>
               </body></html>`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent successfully with the reset code:', verificationCode);
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};
module.exports = sendEmail;
