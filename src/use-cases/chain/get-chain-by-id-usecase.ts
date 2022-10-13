import { ChainModel } from "../../dtos/models/chain-model"
import { ChainRepository } from "../../repositories/chain-repository"

export class GetChainByIdUsecase {
    constructor(private chainRepository: ChainRepository) { }

    async execute(ChainId: string): Promise<ChainModel> {
        return this.chainRepository.get(ChainId)
    }
}