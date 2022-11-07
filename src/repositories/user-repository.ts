import { CreateUserInput } from "../dtos/inputs/create-user-input"
import { UserModel } from "../dtos/models/user-model"
import { ID } from "../types/id-type"
import { TokenType } from "../types/token-type"

export interface UserRepository {
    create(data: CreateUserInput): Promise<ID>
    get(userId: string): Promise<UserModel>
    attemp(email: string, password: string): Promise<TokenType>
}