import { Field, InputType } from "type-graphql"
import { QuestionInput } from "./question-input"

@InputType()
export class CreateFormInput {
    @Field()
    name: string

    @Field(() => [QuestionInput!]!)
    questions: QuestionInput[]
}