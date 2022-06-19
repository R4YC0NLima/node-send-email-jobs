import { IProductsRepository } from "../../repositories/IProductsRepository"

export class DestroyProductUseCase {
    constructor(
        private usersRepositories   : IProductsRepository
    ) {}
    
    async execute(id: string): Promise<void> {
        // const findId = await this.usersRepositories.findById(id);
        
        await this.usersRepositories.destroy(id);
    }
}