import { Field, InputType } from "type-graphql"

@InputType()
export class CreateFormInput {
    @Field(() => String!)
    name: string

    @Field(() => [String!]!)
    questions: string[]
}