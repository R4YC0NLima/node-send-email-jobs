import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserRequestDTO } from "../../useCases/CreateUser/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UserRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async findByEmail(email: string): Promise<User> {
        const findEmail = await this.repository.findOne({email});
        return findEmail!;
    }

    async save(data: ICreateUserRequestDTO): Promise<User> {
        const user = this.repository.create({
            name        :   data.name,
            email       :   data.email,
            password    :   data.password
        });
        
        await this.repository.save(user);

        return user;
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
}