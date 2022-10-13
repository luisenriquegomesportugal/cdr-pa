import { Field, ID, ObjectType } from "type-graphql"
import { serverTimestamp } from "firebase/database"

@ObjectType({ isAbstract: true })
export abstract class Model {
    constructor(id?: string, model?: object) {
        Object.assign(this, model)

        if (id) {
            this.id = id
        }
        else {
            this.createdAt = serverTimestamp()
            this.updatedAt = serverTimestamp()
        }
    }

    @Field(() => ID, { nullable: true })
    id?: string

    @Field(() => String)
    private createdAt: object

    @Field(() => String, { nullable: true })
    private updatedAt?: object
}