import { QueueProvider } from "../../providers/implementations/QueueProvider";
import { MailtrapProvider } from "../../providers/implementations/MailtrapProvider";
import { SqliteUsersRepository } from "../../repositories/implementations/SqliteUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider  = new MailtrapProvider();
const queueProvider         = new QueueProvider({});
const sqliteUsersRepository = new SqliteUsersRepository();


const createUserUseCase     = new CreateUserUseCase(sqliteUsersRepository, mailtrapMailProvider, queueProvider);

const createUserController  = new CreateUserController(createUserUseCase)

export { CreateUserUseCase, createUserController }