import { Field, ObjectType } from "type-graphql"
import { ObjectScalar } from "../../types/object-scalar-type"
import { Model } from "./model"

@ObjectType()
export class ProducerModel extends Model {
    @Field()
    name: string

    @Field({nullable: true})
    description?: string

    @Field(() => ObjectScalar, {nullable: true})
    awnseredForms?: object

    poleId: string
    chainId: string
    userId: string
}