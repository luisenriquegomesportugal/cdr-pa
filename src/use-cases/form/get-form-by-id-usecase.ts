import { FormModel } from "../../dtos/models/form-model"
import { FormRepository } from "../../repositories/form-repository"

export class GetFormByIdUsecase {
    constructor(private formRepository: FormRepository) { }

    async execute(formId: string): Promise<FormModel> {
        return this.formRepository.get(formId)
    }
}