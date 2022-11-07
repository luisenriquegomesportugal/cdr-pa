import { Arg, ID, Mutation, Resolver } from "type-graphql"
import { AttempUserInput } from "../dtos/inputs/attemp-user-input"
import { CreateUserInput } from "../dtos/inputs/create-user-input"
import { UserModel } from "../dtos/models/user-model"
import { UserFirebaseProvider } from "../repositories/providers/firebase/user-firebase-provider"
import { TokenType } from "../types/token-type"
import { AttempUserUsecase } from "../use-cases/user/attemp-user-usecase"
import { CreateUserUsecase } from "../use-cases/user/create-user-usecase"

@Resolver(() => UserModel)
export class UsersResolver {
    @Mutation(() => ID)
    async createUser(@Arg("data") data: CreateUserInput) {
        let userFirebaseProvider = new UserFirebaseProvider()
        let createUserUsecase = new CreateUserUsecase(userFirebaseProvider)
        
        return createUserUsecase.execute(data)
    }

    @Mutation(() => TokenType)
    async attempUser(@Arg("data") data: AttempUserInput) {
        let userFirebaseProvider = new UserFirebaseProvider()
        let attempUserUsecase = new AttempUserUsecase(userFirebaseProvider)
        
        return attempUserUsecase.execute(data)
    }
} 