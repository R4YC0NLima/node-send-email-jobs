import { User } from "../entities/User";
export interface IUserRequestDTO {
    name    : string;
    email   : string;
    password: string;
}

export interface IUsersRepository {
    findById(id:string, data: IUserRequestDTO): Promise<User>;
    findByEmail(email:string): Promise<User>;
    
    create(data: IUserRequestDTO): Promise<User>;
    update(id: string, data: IUserRequestDTO): Promise<User>;
    destroy(id: string): Promise<void>;
    list() : Promise<User[]>
}