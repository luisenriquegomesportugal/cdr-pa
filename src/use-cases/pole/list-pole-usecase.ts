import { PoleModel } from "../../dtos/models/pole-model"
import { PoleRepository } from "../../repositories/pole-repository"

export class ListPoleUsecase {
    constructor(private poleRepository: PoleRepository) { }

    async execute(): Promise<PoleModel[]> {
        return this.poleRepository.list()
    }
}