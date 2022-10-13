import { firebase } from "../../../configs/firebase"
import { getDatabase, ref, push, DatabaseReference, get, child } from "firebase/database"
import { CreateUserInput } from "../../../dtos/inputs/create-user-input"
import { UserRepository } from "../../user-repository"
import { UserModel } from "../../../dtos/models/user-model"
import { ID } from "../../../types/id-type"

export class UserFirebaseProvider implements UserRepository {
    private userDatabaseReference: DatabaseReference

    constructor() {
        let database = getDatabase(firebase)
        this.userDatabaseReference = ref(database, 'users')
    }

    async get(userId: string): Promise<UserModel> {
        let snapshot = await get(child(this.userDatabaseReference, userId))
        return new UserModel(snapshot.key!, snapshot.val())
    }

    async create(data: CreateUserInput): Promise<ID> {
        let user = new UserModel(undefined, data)
        let saved = await push(this.userDatabaseReference, user)
        return saved.key!
    }
}