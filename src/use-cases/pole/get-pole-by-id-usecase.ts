import { PoleModel } from "../../dtos/models/pole-model"
import { PoleRepository } from "../../repositories/pole-repository"

export class GetPoleByIdUsecase {
    constructor(private poleRepository: PoleRepository) { }

    async execute(poleId: string): Promise<PoleModel> {
        return this.poleRepository.get(poleId)
    }
}