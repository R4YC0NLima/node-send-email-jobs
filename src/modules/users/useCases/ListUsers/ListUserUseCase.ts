import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUserUseCase {
    constructor(private userRepository: IUsersRepository){}
    async execute(): Promise<User[]> {
        const allUsers = await this.userRepository.list();
        return allUsers;
    }
}
export { ListUserUseCase };