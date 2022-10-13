import { CreateChainInput } from "../../dtos/inputs/create-chain-input"
import { ChainRepository } from "../../repositories/chain-repository"
import { ID } from "../../types/id-type"

export class CreateChainUsecase {
    constructor(private chainRepository: ChainRepository) { }

    async execute(data: CreateChainInput): Promise<ID> {
        return this.chainRepository.create(data)
    }
}