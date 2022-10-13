import { DatabaseReference, getDatabase, push, ref, get, child } from "firebase/database"
import { firebase } from "../../../configs/firebase"
import { CreateChainInput } from "../../../dtos/inputs/create-chain-input"
import { ChainModel } from "../../../dtos/models/chain-model"
import { ID } from "../../../types/id-type"
import { ChainRepository } from "../../chain-repository"

export class ChainFirebaseProvider implements ChainRepository {
    private chainDatabaseReference: DatabaseReference

    constructor() {
        let database = getDatabase(firebase)
        this.chainDatabaseReference = ref(database, 'chains')
    }

    async get(chainId: string): Promise<ChainModel> {
        let snapshot = await get(child(this.chainDatabaseReference, chainId))
        return snapshot.val() as ChainModel 
    }

    async list(): Promise<ChainModel[]> {
        let snapshot = await get(this.chainDatabaseReference)
        
        let models: ChainModel[] = []
        snapshot.forEach((shot) => {
            models.push(new ChainModel(shot.key!, shot.val()))            
        })

        return models
    }

    async create(data: CreateChainInput): Promise<ID> {
        let chain = new ChainModel(undefined, data)
        let saved = await push(this.chainDatabaseReference, chain)
        return saved.key!
    }   
}