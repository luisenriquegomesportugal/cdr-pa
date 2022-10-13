import { Field, ID, ObjectType } from "type-graphql"
import { DateScalar } from "../../types/date-scalar-type"

@ObjectType({ isAbstract: true })
export abstract class Model {
    constructor(id?: string, model?: object) {
        Object.assign(this, model)

        if (id) {
            this.id = id
        }
        else {
            this.createdAt = new Date()
            this.updatedAt = new Date()
        }
    }

    @Field(() => ID, { nullable: true })
    id?: string

    @Field(() => DateScalar)
    private createdAt: object

    @Field(() => DateScalar, { nullable: true })
    private updatedAt?: object
}