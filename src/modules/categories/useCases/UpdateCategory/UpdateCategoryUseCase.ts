import { Category } from "../../entities/Category";
import { IMailProvider } from "../../../../providers/IMailProvider";
// import { IQueueProvider } from "../../../../providers/IQueueProvider";
import { ICategoryRequestDTO, ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { hash } from "bcrypt";

export class UpdateCategoryUseCase {
    constructor(
        private categoriesRepositories   : ICategoriesRepository
    ) {}
    
    async execute(id: string, data: ICategoryRequestDTO): Promise<Category> {
        // const findId = await this.usersRepositories.findById(id);
        
        const category = await this.categoriesRepositories.update(id, {
            name        : data.name,
            description : data.description,
        });

        return category;
    }
}