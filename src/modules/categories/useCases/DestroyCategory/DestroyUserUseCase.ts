import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

export class DestroyUserUseCase {
    constructor(
        private usersRepositories   : ICategoriesRepository
    ) {}
    
    async execute(id: string): Promise<void> {
        // const findId = await this.usersRepositories.findById(id);
        
        await this.usersRepositories.destroy(id);
    }
}