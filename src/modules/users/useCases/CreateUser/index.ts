// import { QueueProvider } from "../../../../providers/implementations/QueueProvider";
import { MailtrapProvider } from "../../../../providers/implementations/MailtrapProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider  = new MailtrapProvider();
// const queueProvider         = new QueueProvider({});

export default (): CreateUserController => {
    const userRepository        = new UserRepository();

    const createUserUseCase     = new CreateUserUseCase(userRepository, mailtrapMailProvider);

    const createUserController  = new CreateUserController(createUserUseCase);

    return createUserController;
}