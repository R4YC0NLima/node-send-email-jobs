import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository, ICreateUserRequestDTO } from "../IUsersRepository";

export class UserRepository implements IUsersRepository {
    private repository: Repository<User>;

    private static INSTANCE: UserRepository;

    constructor() {
        this.repository = getRepository(User);
    }

    public static getInstance(): UserRepository {
        if (!UserRepository.INSTANCE) {
          UserRepository.INSTANCE = new UserRepository();
        }
    
        return UserRepository.INSTANCE;
      }

    async findByEmail(email: string): Promise<User> {
        const findEmail = await this.repository.findOne({email});
        return findEmail!;
    }

    async create(data: ICreateUserRequestDTO): Promise<User> {
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