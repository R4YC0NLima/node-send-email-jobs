import { Category } from "../../entities/Category";
import { ICategoryRequestDTO, ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { hash } from "bcrypt";

export class CreateCategoryUseCase {
    constructor(
        private categoriesRepositories   : ICategoriesRepository
    ) {}
    
    async execute(data: ICategoryRequestDTO): Promise<Category> {
        // const userAlreadyExists = await this.categoriesRepositories.findById(data.id);
        
        // if (userAlreadyExists) {
        //     throw new Error("Category already exists.");
        // }

        const category = await this.categoriesRepositories.create({
            name        : data.name,
            description : data.description,
        });

        return category;
    }
}