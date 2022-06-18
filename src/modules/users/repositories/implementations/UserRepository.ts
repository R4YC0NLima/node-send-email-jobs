import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository, IUserRequestDTO } from "../IUsersRepository";

export class UserRepository implements IUsersRepository {
    private repository: Repository<User>;
    private static INSTANCE: UserRepository;

    constructor() {
        this.repository = getRepository(User);
    }  

    async destroy(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findById(id: string): Promise<User> {
        const findId = await this.repository.findOne({id});
        return findId!;
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

    async create(data: IUserRequestDTO): Promise<User> {
        const user = this.repository.create({
            name        :   data.name,
            email       :   data.email,
            password    :   data.password
        });
        
        await this.repository.save(user);

        return user;
    }

    async update(id: string, data: IUserRequestDTO): Promise<User> {
        await this.repository.update(id, {
            name        :   data.name,
            email       :   data.email,
            password    :   data.password
        });

        return this.repository.save(data);
    }

    async show(id: string): Promise<User> {
        const user = await this.repository.findOne({id});
        return user!;
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
}