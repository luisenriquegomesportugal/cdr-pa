import { ListProducerInput } from "../../dtos/inputs/list-producer-input"
import { ProducerModel } from "../../dtos/models/producer-model"
import { ProducerRepository } from "../../repositories/producer-repository"

export class ListProducerUsecase {
    constructor(private producerRepository: ProducerRepository) { }
    
    async execute(data: ListProducerInput): Promise<ProducerModel[]> {
        return this.producerRepository.list(data)
    }
}