import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export default(): ListCategoryController => {
    const categoryRepository        = new CategoryRepository();
    const listCategoryUseCase       = new ListCategoryUseCase(categoryRepository);
    const listCategorysController   = new ListCategoryController(listCategoryUseCase);

    return listCategorysController;
}