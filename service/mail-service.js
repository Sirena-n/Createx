const nodeMailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodeMailer.createTransport({
            host: process.env.SNTP_HOST,
            port: process.env.SNTP_PORT,
            secure: false,
            auth: {
                user: process.env.SNTP_USER,
                pass: process.env.SNTP_PASSWORD
            }
        })
    };

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SNTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html:
                `
                <div>
                    <h1>Для активации передите по ссылке</h1>
                    <a href='${link}'>${link}</a>
                </div>
                `
        });
    };
};

module.exports = new MailService();