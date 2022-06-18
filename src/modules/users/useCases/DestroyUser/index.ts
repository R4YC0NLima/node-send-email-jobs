import { UserRepository } from "../../repositories/implementations/UserRepository";
import { DestroyUserController } from "./DestroyUserController";
import { DestroyUserUseCase } from "./DestroyUserUseCase";

export default (): DestroyUserController => {
    const userRepository        = new UserRepository();

    const destroyUserUseCase     = new DestroyUserUseCase(userRepository);

    const destroyUserController  = new DestroyUserController(destroyUserUseCase);

    return destroyUserController;
}