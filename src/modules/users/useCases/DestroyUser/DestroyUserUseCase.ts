import { User } from "../../entities/User";
import { IUserRequestDTO, IUsersRepository } from "../../repositories/IUsersRepository"

export class DestroyUserUseCase {
    constructor(
        private usersRepositories   : IUsersRepository
    ) {}
    
    async execute(id: string): Promise<void> {
        // const findId = await this.usersRepositories.findById(id);
        
        await this.usersRepositories.destroy(id);
    }
}