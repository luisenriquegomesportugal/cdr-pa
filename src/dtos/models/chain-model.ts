import { Field, ObjectType } from "type-graphql"
import { Model } from "./model"

@ObjectType()
export class ChainModel extends Model {
    @Field()
    name: string
}