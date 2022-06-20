import { Product } from "../../entities/Product";
import { IProductRequestDTO, IProductsRepository } from "../../repositories/IProductsRepository"
import { hash } from "bcrypt";

export class CreateProductUseCase {
    constructor(private categoriesRepositories   : IProductsRepository) {}
    
    async execute(data: IProductRequestDTO): Promise<Product> {
        // const userAlreadyExists = await this.categoriesRepositories.findById(data.id);
        
        // if (userAlreadyExists) {
        //     throw new Error("Product already exists.");
        // }

        const category = await this.categoriesRepositories.create({
            name            : data.name,
            price           : data.price,
            description     : data.description,
            category        : data.category,
        });

        return category;
    }
}