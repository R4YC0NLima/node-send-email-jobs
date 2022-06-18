import { User } from "../../entities/User";
import { IMailProvider } from "../../../../providers/IMailProvider";
// import { IQueueProvider } from "../../../../providers/IQueueProvider";
import { IUserRequestDTO, IUsersRepository } from "../../repositories/IUsersRepository"
import { hash } from "bcrypt";

export class UpdateUserUseCase {
    constructor(
        private usersRepositories   : IUsersRepository
    ) {}
    
    async execute(id: string, data: IUserRequestDTO): Promise<User> {
        // const findId = await this.usersRepositories.findById(id);
        
        const user = await this.usersRepositories.update(id, {
            name    : data.name,
            email   : data.email,
            password: await hash(data.password,8),
        });

        return user;
    }
}