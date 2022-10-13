import { CreateProducerInput } from "../dtos/inputs/create-producer-input"
import { ListProducerInput } from "../dtos/inputs/list-producer-input"
import { AwnserFormInput } from "../dtos/inputs/awnser-form-input"
import { ProducerModel } from "../dtos/models/producer-model"
import { ID } from "../types/id-type"

export interface ProducerRepository {
    list(data: ListProducerInput): Promise<ProducerModel[]>
    create(data: CreateProducerInput): Promise<ID>
    awnser(data: AwnserFormInput): Promise<Boolean>
}