const nodeMailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodeMailer.createTransport({
            host: process.env.SNTP__HOST,
            port: process.env.SNTP__PORT,
            secure: false,
            auth: {
                user: process.env.SNTP__USER,
                pass: process.env.SNTP__PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SNTP__USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API__URL,
            text: '',
            html:
                `
                <div>
                    <h1>Для активации передите по ссылке</h1>
                    <a href='${link}'>${link}</a>
                </div>
                `
        })
    }
}

module.exports = new MailService();