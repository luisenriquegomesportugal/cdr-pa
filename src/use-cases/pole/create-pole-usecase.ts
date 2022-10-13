import { CreatePoleInput } from "../../dtos/inputs/create-pole-input"
import { PoleRepository } from "../../repositories/pole-repository"
import { ID } from "../../types/id-type"

export class CreatePoleUsecase {
    constructor(private poleRepository: PoleRepository) { }

    async execute(data: CreatePoleInput): Promise<ID> {        
        return this.poleRepository.create(data)
    }
}