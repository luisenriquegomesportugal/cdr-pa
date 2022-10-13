import { UserModel } from "../../dtos/models/user-model"
import { UserRepository } from "../../repositories/user-repository"
import { UserRoleType } from "../../types/role-user-type"

export class GetUserByIdUsecase {
    constructor(private userRepository: UserRepository) { }

    async execute(userId: string): Promise<UserModel> {
        return this.userRepository.get(userId)
    }
}