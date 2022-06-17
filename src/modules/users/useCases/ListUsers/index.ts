import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

export default(): ListUserController => {
    const userRepository = new UserRepository();

    const listUserUseCase = new ListUserUseCase(userRepository);

    const listUsersController = new ListUserController(listUserUseCase);

    return listUsersController;
}