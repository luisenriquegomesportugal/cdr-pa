import { DatabaseReference, push, ref, get, child } from "firebase/database"
import { connect } from "../../../configs/firebase"
import { CreateFormInput } from "../../../dtos/inputs/create-form-input"
import { FormModel } from "../../../dtos/models/form-model"
import { ID } from "../../../types/id-type"
import { FormRepository } from "../../form-repository"

export class FormFirebaseProvider implements FormRepository {
    private formDatabaseReference: DatabaseReference

    constructor() {
        let database = connect()
        this.formDatabaseReference = ref(database, 'forms')
    }

    async get(formId: string): Promise<FormModel> {
        let snapshot = await get(child(this.formDatabaseReference, formId))
        return new FormModel(snapshot.key!, snapshot.val())
    }

    async list(): Promise<FormModel[]> {
        let snapshot = await get(this.formDatabaseReference)

        let models: FormModel[] = []
        snapshot.forEach((shot) => {
            models.push(new FormModel(shot.key!, shot.val()))
        })

        return models
    }

    async create(data: CreateFormInput): Promise<ID> {
        let form = new FormModel(undefined, data)
        let saved = await push(this.formDatabaseReference, form)
        return saved.key!
    }
}