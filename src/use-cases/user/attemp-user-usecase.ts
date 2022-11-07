import { AttempUserInput } from "../../dtos/inputs/attemp-user-input"
import { UserRepository } from "../../repositories/user-repository"
import { TokenType } from "../../types/token-type"

export class AttempUserUsecase {
    constructor(private userRepository: UserRepository) { }

    async execute({email, password}: AttempUserInput): Promise<TokenType> {
        return this.userRepository.attemp(email, password)
    }
}