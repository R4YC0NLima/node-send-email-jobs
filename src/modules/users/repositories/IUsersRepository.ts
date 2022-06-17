import { User } from "../entities/User";
import { ICreateUserRequestDTO } from "../useCases/CreateUser/CreateUserDTO";

export interface IUsersRepository {
    findByEmail(email:string): Promise<User>;
    save(data: ICreateUserRequestDTO): Promise<User>;
    list() : Promise<User[]>
}