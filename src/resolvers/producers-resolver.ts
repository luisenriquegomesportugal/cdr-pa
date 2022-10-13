import { Arg, FieldResolver, ID, Mutation, Query, Resolver, Root } from "type-graphql"
import { CreateProducerInput } from "../dtos/inputs/create-producer-input"
import { ProducerModel } from "../dtos/models/producer-model"
import { CreateProducerUsecase } from "../use-cases/producer/create-producer-usecase"
import { ProducerFirebaseProvider } from "../repositories/providers/firebase/producer-firebase-provider"
import { ProducerRepository } from "../repositories/producer-repository"
import { ListProducerInput } from "../dtos/inputs/list-producer-input"
import { ListProducerUsecase } from "../use-cases/producer/list-producer-usecase"
import { PoleModel } from "../dtos/models/pole-model"
import { ChainModel } from "../dtos/models/chain-model"
import { UserModel } from "../dtos/models/user-model"
import { GetUserByIdUsecase } from "../use-cases/user/get-user-by-id-usecase"
import { GetPoleByIdUsecase } from "../use-cases/pole/get-pole-by-id-usecase"
import { GetChainByIdUsecase } from "../use-cases/chain/get-chain-by-id-usecase"
import { AwnserProducerUsecase } from "../use-cases/producer/awnser-producer-usecase"
import { AwnserFormInput } from "../dtos/inputs/awnser-form-input"
import { UserFirebaseProvider } from "../repositories/providers/firebase/user-firebase-provider"
import { PoleFirebaseProvider } from "../repositories/providers/firebase/pole-firebase-provider"
import { ChainFirebaseProvider } from "../repositories/providers/firebase/chain-firebase-provider"

@Resolver(() => ProducerModel)
export class ProducersResolver {
    private producerFirebaseProvider: ProducerRepository

    constructor() {
        this.producerFirebaseProvider = new ProducerFirebaseProvider()
    }

    @Query(() => [ProducerModel!]!, {nullable: true})
    async listProducer(@Arg("data") data: ListProducerInput) {
        let createProducerUsecase = new ListProducerUsecase(this.producerFirebaseProvider)
        return await createProducerUsecase.execute(data)
    }

    @Mutation(() => ID)
    async createProducer(@Arg("data") data: CreateProducerInput) {
        let createProducerUsecase = new CreateProducerUsecase(this.producerFirebaseProvider)
        return await createProducerUsecase.execute(data)
    }

    @Mutation(() => Boolean)
    async saveAwnser(@Arg("data") data: AwnserFormInput) {
        let awnserProducerUsecase = new AwnserProducerUsecase(this.producerFirebaseProvider)
        return await awnserProducerUsecase.execute(data);
    }

    @FieldResolver(() => PoleModel!)
    async pole(@Root() producer: ProducerModel) {
        let poleFirebaseProvider = new PoleFirebaseProvider()
        let getPoleByIdUsecase = new GetPoleByIdUsecase(poleFirebaseProvider)
        return await getPoleByIdUsecase.execute(producer.poleId)
    }    
    
    @FieldResolver(() => ChainModel!)
    async chain(@Root() producer: ProducerModel) {
        let chainFirebaseProvider = new ChainFirebaseProvider()
        let getChainByIdUsecase = new GetChainByIdUsecase(chainFirebaseProvider)
        return await getChainByIdUsecase.execute(producer.chainId)
    }

    @FieldResolver(() => UserModel!)
    async user(@Root() producer: ProducerModel) {
        let userFirebaseProvider = new UserFirebaseProvider()
        let getUserByIdUsecase = new GetUserByIdUsecase(userFirebaseProvider)
        return await getUserByIdUsecase.execute(producer.userId)
    }
} 