import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { DestroyUserController } from "./DestroyUserController";
import { DestroyUserUseCase } from "./DestroyUserUseCase";

export default (): DestroyUserController => {
    const userRepository        = new CategoryRepository();

    const destroyUserUseCase     = new DestroyUserUseCase(userRepository);

    const destroyUserController  = new DestroyUserController(destroyUserUseCase);

    return destroyUserController;
}