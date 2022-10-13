import { Arg, ID, Mutation, Query, Resolver } from "type-graphql"
import { CreatePoleInput } from "../dtos/inputs/create-pole-input"
import { PoleModel } from "../dtos/models/pole-model"
import { ListPoleUsecase } from "../use-cases/pole/list-pole-usecase"
import { CreatePoleUsecase } from "../use-cases/pole/create-pole-usecase"
import { PoleRepository } from "../repositories/pole-repository"
import { PoleFirebaseProvider } from "../repositories/providers/firebase/pole-firebase-provider"

@Resolver(() => PoleModel)
export class PolesResolver {
    private poleFirebaseProvider: PoleRepository

    constructor() {
        this.poleFirebaseProvider = new PoleFirebaseProvider()
    }

    @Query(() => [PoleModel], {nullable: true})
    async listPole(): Promise<PoleModel[]> {
        let listPoleUsecase = new ListPoleUsecase(this.poleFirebaseProvider)

        return await listPoleUsecase.execute()
    }

    @Mutation(() => ID)
    async createPole(@Arg("data") data: CreatePoleInput) {
        let createPoleUsecase = new CreatePoleUsecase(this.poleFirebaseProvider)

        return await createPoleUsecase.execute(data)
    }
} 