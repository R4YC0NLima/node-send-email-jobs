// import { QueueProvider } from "../../../../providers/implementations/QueueProvider";
import { MailtrapProvider } from "../../../../providers/implementations/MailtrapProvider";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { CreateUserController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const mailtrapMailProvider  = new MailtrapProvider();
// const queueProvider         = new QueueProvider({});

export default (): CreateUserController => {
    const categoryRepository    = new CategoryRepository();
    const createUserUseCase     = new CreateCategoryUseCase(categoryRepository);
    const createUserController  = new CreateUserController(createUserUseCase);

    return createUserController;
}