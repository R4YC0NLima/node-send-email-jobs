import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

export default(): ListUserController => {
    const userRepository = new CategoryRepository();

    const listUserUseCase = new ListUserUseCase(userRepository);

    const listUsersController = new ListUserController(listUserUseCase);

    return listUsersController;
}