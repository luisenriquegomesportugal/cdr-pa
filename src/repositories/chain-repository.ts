import { CreateChainInput } from "../dtos/inputs/create-chain-input"
import { ChainModel } from "../dtos/models/chain-model"
import { ID } from "../types/id-type"

export interface ChainRepository {
    list(): Promise<ChainModel[]>
    create(data: CreateChainInput): Promise<ID>
    get(chainId: string): Promise<ChainModel>
}