import { CreatePoleInput } from "../dtos/inputs/create-pole-input"
import { PoleModel } from "../dtos/models/pole-model"
import { ID } from "../types/id-type"

export interface PoleRepository {
    list(): Promise<PoleModel[]>
    create(data: CreatePoleInput): Promise<ID>
    get(poleId: string): Promise<PoleModel>

}