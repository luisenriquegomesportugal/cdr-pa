import { Field, ObjectType } from "type-graphql"
import { Model } from "./model"

@ObjectType()
export class PoleModel extends Model {
    @Field(() => String!)
    name: string
}