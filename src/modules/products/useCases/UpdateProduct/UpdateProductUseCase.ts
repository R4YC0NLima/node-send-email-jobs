import { Product } from "../../entities/Product";
import { IProductRequestDTO, IProductsRepository } from "../../repositories/IProductsRepository"

export class UpdateProductUseCase {
    constructor(
        private categoriesRepositories   : IProductsRepository
    ) {}
    
    async execute(id: string, data: IProductRequestDTO): Promise<Product> {
        // const findId = await this.usersRepositories.findById(id);
        
        const category = await this.categoriesRepositories.update(id, {
            name        : data.name,            
            price       : data.price,
            description : data.description,
            category    : data.category
        });

        return category;
    }
}