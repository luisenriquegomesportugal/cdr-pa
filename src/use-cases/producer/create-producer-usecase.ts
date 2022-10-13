import { CreateProducerInput } from "../../dtos/inputs/create-producer-input"
import { ProducerRepository } from "../../repositories/producer-repository"
import { ID } from "../../types/id-type"

export class CreateProducerUsecase {
    constructor(private producerRepository: ProducerRepository) { }
    
    async execute(data: CreateProducerInput): Promise<ID> {        
        return this.producerRepository.create(data)
    }
}