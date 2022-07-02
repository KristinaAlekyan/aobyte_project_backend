import nodemailer from "nodemailer";

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: "",
            text: '',
            html:
                `
                    <div>
                        <h1>Тo activate your account, follow the link</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        }, (err, info) => {
           if(err){
            return console.log(err)
           } else res.status(200).send({message:"mail send", messageId: info.messageId})
        })
    }

}

export default new MailService()