import { CreateUserInput } from "../dtos/inputs/create-user-input"
import { UserModel } from "../dtos/models/user-model"
import { ID } from "../types/id-type"

export interface UserRepository {
    create(data: CreateUserInput): Promise<ID>
    get(userId: string): Promise<UserModel>
}