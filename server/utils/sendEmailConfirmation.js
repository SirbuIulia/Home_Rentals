const nodemailer = require('nodemailer');
require('dotenv').config();
const { format } = require('date-fns');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.EMAIL_USERNAME, // Fetching from environment
        pass: process.env.EMAIL_PASSWORD  // Fetching from environment
    }
});

const sendBookingConfirmation = async (stripeEmail, booking) => {
    console.log('Sending email to:', stripeEmail);
    if (!stripeEmail || !booking) {
        console.error('Email or booking details are missing');
        return;
    }

    if (!(booking.startDate instanceof Date) || !(booking.endDate instanceof Date)) {
        console.error('Invalid booking dates');
        return;
    }

    const startDate = format(booking.startDate, 'dd/MM/yyyy');
    const endDate = format(booking.endDate, 'dd/MM/yyyy');

    const { streetAddress, city, country, title } = booking.listingId;

    const mailOptions = {
        from: `"Home Rentals" <${process.env.EMAIL_USERNAME}>`,
        to: stripeEmail,
        subject: 'Confirmare rezervare',
        html: `<p>Vă mulțumim pentru rezervarea făcută la una din gazdele noastre primitoare.</p>
           <p><strong>Detalii rezervare:</strong></p>
           <ul>
           <li>Cazare: ${title}</li>
           <li>Perioadă: ${startDate} - ${endDate}</li>
           <li>Locație: ${streetAddress}, ${city}, ${country}</li>
           <li>Preț total plătit: ${booking.totalPrice} ron</li>
           </ul>
           <p>Sperăm să aveți parte de o ședere plăcută!</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Booking confirmation email sent successfully to:', stripeEmail);
    } catch (error) {
        console.error('Failed to send booking confirmation email:', error);
    }
};
module.exports = sendBookingConfirmation;