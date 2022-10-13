import { FormModel } from "../../dtos/models/form-model"
import { FormRepository } from "../../repositories/form-repository"

export class ListFormUsecase {
    constructor(private formRepository: FormRepository) { }

    async execute(): Promise<FormModel[]> {
        return this.formRepository.list()
    }
}