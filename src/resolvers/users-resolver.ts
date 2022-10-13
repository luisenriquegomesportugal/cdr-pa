import { Arg, ID, Mutation, Resolver } from "type-graphql"
import { CreateUserInput } from "../dtos/inputs/create-user-input"
import { UserModel } from "../dtos/models/user-model"
import { UserFirebaseProvider } from "../repositories/providers/firebase/user-firebase-provider"
import { CreateUserUsecase } from "../use-cases/user/create-user-usecase"

@Resolver(() => UserModel)
export class UsersResolver {
    @Mutation(() => ID)
    async createUser(@Arg("data") data: CreateUserInput) {
        let userFirebaseProvider = new UserFirebaseProvider()
        let createUserUsecase = new CreateUserUsecase(userFirebaseProvider)
        
        return await createUserUsecase.execute(data)
    }
} 