import { CreateUserInput } from "../../dtos/inputs/create-user-input"
import { UserRepository } from "../../repositories/user-repository"
import { ID } from "../../types/id-type"

export class CreateUserUsecase {
    constructor(private userRepository: UserRepository) { }

    async execute(data: CreateUserInput): Promise<ID> {
        return this.userRepository.create(data)
    }
}