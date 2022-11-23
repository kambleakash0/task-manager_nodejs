const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kambleakash0@hotmail.com',
        subject: 'Welcome!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kambleakash0@hotmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
