import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository){}
    async execute(): Promise<Category[]> {
        const allCategories = await this.categoryRepository.list();
        return allCategories;
    }
}
export { ListCategoryUseCase };