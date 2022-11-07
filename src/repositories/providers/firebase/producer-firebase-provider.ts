import { Database, DatabaseReference, equalTo, get, orderByChild, push, query, ref, serverTimestamp, update } from "firebase/database"
import { connectDatabase } from "../../../configs/firebase"
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
        this.database = connectDatabase()
        this.producersRef = ref(this.database, 'producers')
    }

    async list(data: ListProducerInput): Promise<ProducerModel[]> {
        let producerQuery = query(this.producersRef,
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

        await update(databaseRef, {[`/${this.producersRef.key}/${producerId}/awnseredForms/${formId}`]: awnsers})
        return true
    }
}