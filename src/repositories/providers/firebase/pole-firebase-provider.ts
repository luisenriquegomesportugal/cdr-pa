import { DatabaseReference, getDatabase, push, ref, get, child } from "firebase/database"
import { firebase } from "../../../configs/firebase"
import { CreatePoleInput } from "../../../dtos/inputs/create-pole-input"
import { PoleModel } from "../../../dtos/models/pole-model"
import { ID } from "../../../types/id-type"
import { PoleRepository } from "../../pole-repository"

export class PoleFirebaseProvider implements PoleRepository {
    private poleDatabaseReference: DatabaseReference

    constructor() {
        let database = getDatabase(firebase)
        this.poleDatabaseReference = ref(database, 'poles')
    }

    async get(poleId: string): Promise<PoleModel> {
        let snapshot = await get(child(this.poleDatabaseReference, poleId))
        return new PoleModel(snapshot.key!, snapshot.val())
    }

    async list(): Promise<PoleModel[]> {
        let snapshot = await get(this.poleDatabaseReference)

        let models: PoleModel[] = []
        snapshot.forEach((shot) => {
            models.push(new PoleModel(shot.key!, shot.val()))            
        })

        return models
    }

    async create(data: CreatePoleInput): Promise<ID> {
        let pole = new PoleModel(undefined, data)
        let saved = await push(this.poleDatabaseReference, pole)
        return saved.key!
    }   
}