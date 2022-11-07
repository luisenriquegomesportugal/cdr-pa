import { connectDatabase, connectAuth } from "../../../configs/firebase"
import { ref, push, DatabaseReference, get, child } from "firebase/database"
import { CreateUserInput } from "../../../dtos/inputs/create-user-input"
import { UserRepository } from "../../user-repository"
import { UserModel } from "../../../dtos/models/user-model"
import { ID } from "../../../types/id-type"
import { Auth, signInWithEmailAndPassword } from "firebase/auth"
import { TokenType } from "../../../types/token-type"

export class UserFirebaseProvider implements UserRepository {
    private userDatabaseReference: DatabaseReference
    private authReference: Auth

    constructor() {
        this.userDatabaseReference = ref(connectDatabase(), 'users')
        this.authReference = connectAuth()
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

    async attemp(email: string, password: string): Promise<TokenType> {
        let {user} = await signInWithEmailAndPassword(this.authReference, email, password)

        let token = await user.getIdTokenResult()
        return {
            accessToken: token.token,
            expirationTime: token.expirationTime
        } 
    }
}