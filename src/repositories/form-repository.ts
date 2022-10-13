import { CreateFormInput } from "../dtos/inputs/create-form-input"
import { FormModel } from "../dtos/models/form-model"
import { ID } from "../types/id-type"

export interface FormRepository {
    list(): Promise<FormModel[]>
    create(data: CreateFormInput): Promise<ID>
    get(formId: string): Promise<FormModel>
}