import { User } from "../../entities/User";
import { IMailProvider } from "../../../../providers/IMailProvider";
// import { IQueueProvider } from "../../../../providers/IQueueProvider";
import { IUserRequestDTO, IUsersRepository } from "../../repositories/IUsersRepository"
import { hash } from "bcrypt";

export class CreateUserUseCase {
    constructor(
        private usersRepositories   : IUsersRepository,
        private mailProvider        : IMailProvider,
        // private queueProvider       : IQueueProvider
    ) {}
    
    async execute(data: IUserRequestDTO): Promise<User> {
        const userAlreadyExists = await this.usersRepositories.findByEmail(data.email);
        
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = await this.usersRepositories.create({
            name    : data.name,
            email   : data.email,
            password: await hash(data.password,8),
        });

        // return user;
        
        // await this.queueProvider.add('sendMailJobs', data)

        // Esse trecho vai entrar na fila depois
        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Alphatec',
                email: `send-email@alphatec.com`,
            },
            subject: `Bem vindo ${data.name}`,
            body: `Olá ${data.name}, seja bem vindo a nossa plataforma`
        })
        // Esse trecho vai entrar na fila depois

        return user;
    }
}