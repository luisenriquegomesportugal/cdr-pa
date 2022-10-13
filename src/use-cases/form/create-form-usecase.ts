import { CreateFormInput } from "../../dtos/inputs/create-form-input"
import { FormRepository } from "../../repositories/form-repository"
import { ID } from "../../types/id-type"

export class CreateFormUsecase {
    constructor(private formRepository: FormRepository) { }

    async execute(data: CreateFormInput): Promise<ID> {
        return this.formRepository.create(data)
    }
}