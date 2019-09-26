const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'omlevash@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get aling with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'omlevash@gmail.com',
        subject: 'Thanks for the time you spend to us',
        text: `Hello ${name}. Thank you for choosing us. Good luck and have a nice day`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// sgMail.send({
//     to: 'omlevash@gmail.com',
//     from: 'omlevash@gmail.com',
//     subject: 'Доброго дня',
//     text: 'Шановний абоненте. Попереджаємо. Якщо ви не заплатите за інтернет вас виєбуть в сраку. Гарного дня'
// })