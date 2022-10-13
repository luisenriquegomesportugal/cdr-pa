import { Field, ObjectType } from "type-graphql"
import { Model } from "./model"

@ObjectType()
export class FormModel extends Model {
    @Field()
    name: string

    @Field(() => [String!]!)
    questions: string[]
}