import { ChainModel } from "../../dtos/models/chain-model"
import { ChainRepository } from "../../repositories/chain-repository"

export class ListChainUsecase {
    constructor(private chainRepository: ChainRepository) { }

    async execute(): Promise<ChainModel[]> {
        return this.chainRepository.list()
    }
}