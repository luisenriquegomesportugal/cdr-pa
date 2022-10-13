import { Arg, ID, Mutation, Query, Resolver } from "type-graphql"
import { CreateChainInput } from "../dtos/inputs/create-chain-input"
import { ChainModel } from "../dtos/models/chain-model"
import { ListChainUsecase } from "../use-cases/chain/list-chain-usecase"
import { CreateChainUsecase } from "../use-cases/chain/create-chain-usecase"
import { ChainRepository } from "../repositories/chain-repository"
import { ChainFirebaseProvider } from "../repositories/providers/firebase/chain-firebase-provider"

@Resolver(() => ChainModel)
export class ChainsResolver {
    private chainFirebaseProvider: ChainRepository

    constructor() {
        this.chainFirebaseProvider = new ChainFirebaseProvider()
    }

    @Query(() => [ChainModel], {nullable: true})
    async listChain(): Promise<ChainModel[]> {
        let listChainUsecase = new ListChainUsecase(this.chainFirebaseProvider)

        return await listChainUsecase.execute()
    }

    @Mutation(() => ID)
    async createChain(@Arg("data") data: CreateChainInput) {
        let createChainUsecase = new CreateChainUsecase(this.chainFirebaseProvider)

        return await createChainUsecase.execute(data)
    }
} 