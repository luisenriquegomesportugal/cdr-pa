import { Database, DatabaseReference, equalTo, get, getDatabase, orderByChild, push, query, ref, serverTimestamp, update } from "firebase/database"
import { firebase } from "../../../configs/firebase"
import { AwnserFormInput } from "../../../dtos/inputs/awnser-form-input"
import { CreateProducerInput } from "../../../dtos/inputs/create-producer-input"
import { ListProducerInput } from "../../../dtos/inputs/list-producer-input"
import { ProducerModel } from "../../../dtos/models/producer-model"
import { ProducerRepository } from "../../producer-repository"
import { ID } from "../../../types/id-type"

export class ProducerFirebaseProvider implements ProducerRepository {
    private database: Database
    private producersRef: DatabaseReference

    constructor() {
        this.database = getDatabase(firebase)
        this.producersRef = ref(this.database, 'producers')
    }

    async list(data: ListProducerInput): Promise<ProducerModel[]> {
        let producerQuery = await query(this.producersRef,
            orderByChild('userId'),
            equalTo(data.userId))

        let snapshot = await get(producerQuery)

        let models: ProducerModel[] = []
        snapshot.forEach((shot) => {
            models.push(new ProducerModel(shot.key!, shot.val()))
        })
        

        return models
    }

    async create(data: CreateProducerInput): Promise<ID> {
        let producer = new ProducerModel(undefined, data)
        let saved = await push(this.producersRef, producer)
        return saved.key!
    }

    async awnser({ producerId, awnsers, formId }: AwnserFormInput): Promise<Boolean> {
        let databaseRef = ref(this.database)
        let paths = {
            [`/${this.producersRef.key}/${producerId}/formsAwnsered/${formId}`]: awnsers,
            [`/${this.producersRef.key}/${producerId}`]: {
                updatedAt: serverTimestamp()
            }
        }

        await update(databaseRef, paths)
        return true
    }
}