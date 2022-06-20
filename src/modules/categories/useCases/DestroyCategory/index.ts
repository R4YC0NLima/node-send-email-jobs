import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { DestroyCategoryController } from "./DestroyCategoryController";
import { DestroyCategoryUseCase } from "./DestroyCategoryUseCase";

export default (): DestroyCategoryController => {
    const categoryRepository        = new CategoryRepository();

    const destroyCategoryUseCase     = new DestroyCategoryUseCase(categoryRepository);

    const destroyCategoryController  = new DestroyCategoryController(destroyCategoryUseCase);

    return destroyCategoryController;
}