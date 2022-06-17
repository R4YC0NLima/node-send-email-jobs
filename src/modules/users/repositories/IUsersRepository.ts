import { User } from "../entities/User";
export interface ICreateUserRequestDTO {
    name    : string;
    email   : string;
    password: string;
}

export interface IUsersRepository {
    findByEmail(email:string): Promise<User>;
    create(data: ICreateUserRequestDTO): Promise<User>;
    list() : Promise<User[]>
}