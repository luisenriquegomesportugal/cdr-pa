import { Field, InputType } from "type-graphql"

@InputType()
export class CreateFormInput {
    @Field()
    name: string

    @Field(() => [String!]!)
    questions: string[]
}