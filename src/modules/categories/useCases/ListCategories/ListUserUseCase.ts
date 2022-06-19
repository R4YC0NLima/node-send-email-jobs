import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListUserUseCase {
    constructor(private userRepository: ICategoriesRepository){}
    async execute(): Promise<Category[]> {
        const allCategories = await this.userRepository.list();
        return allCategories;
    }
}
export { ListUserUseCase };