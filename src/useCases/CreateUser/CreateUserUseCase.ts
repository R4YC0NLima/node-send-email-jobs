import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IQueueProvider } from "../../providers/IQueueProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepositories: IUsersRepository,
        private mailProvider: IMailProvider,
        private queueProvider: IQueueProvider
    ) {}
    
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepositories.findByEmail(data.email);
        
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }
        
        const user = new User(data);

        await this.usersRepositories.save(user);
        
        await this.queueProvider.add('sendMailJobs', data)
    }
}