import { AwnserFormInput } from "../../dtos/inputs/awnser-form-input"
import { ProducerRepository } from "../../repositories/producer-repository"

export class AwnserProducerUsecase {
    constructor(private producerRepository: ProducerRepository) { }
    
    async execute(data: AwnserFormInput): Promise<Boolean> {        
        return this.producerRepository.awnser(data)
    }
}