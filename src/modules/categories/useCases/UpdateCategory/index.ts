import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { UpdateCategoryController } from "./UpdateCategoryController";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

export default (): UpdateCategoryController => {
    const categoryRepository        = new CategoryRepository();
    const updateCategoryUseCase     = new UpdateCategoryUseCase(categoryRepository);
    const updateCategoryController  = new UpdateCategoryController(updateCategoryUseCase);

    return updateCategoryController;
}