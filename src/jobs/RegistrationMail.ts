import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;
        await Mail.sendMail({
            from: 'Queue Test <queue@test.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: `Bem vindo ${user.name}`,
            text: `Olá ${user.name}, seja bem vindo a nossa plataforma`
        })
    }
}