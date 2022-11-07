import { Field, ObjectType } from "type-graphql"
import { Model } from "./model"
import { QuestionModel } from "./question-model"

@ObjectType()
export class FormModel extends Model {
    @Field()
    name: string

    @Field(() => [QuestionModel!]!)
    questions: QuestionModel[]
}