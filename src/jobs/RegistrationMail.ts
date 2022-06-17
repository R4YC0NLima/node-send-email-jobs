import nodemailer from 'nodemailer';
import { MailtrapProvider } from '../providers/implementations/MailtrapProvider';
export default {
    key: 'RegistrationMail',
    async handle(data: any) {
        const { user } = data;
        await new MailtrapProvider().sendMail({
            from: {
              name: data.name,
              email: data.email
            },
            to: {
              name: data.name,
              email: data.email
            },
            subject: `Bem vindo ${user.name}`,
            body: `Olá ${user.name}, seja bem vindo a nossa plataforma`
        })
    }
}