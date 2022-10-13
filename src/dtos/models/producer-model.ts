import { Field, ObjectType } from "type-graphql"
import { ObjectScalar } from "../../types/forms-awnsered-type"
import { Model } from "./model"

@ObjectType()
export class ProducerModel extends Model {
    @Field(() => String!)
    name: string

    @Field(() => String, {nullable: true})
    description?: string

    @Field(() => ObjectScalar, {nullable: true})
    formsAwnsered?: object

    poleId: string
    chainId: string
    userId: string
}