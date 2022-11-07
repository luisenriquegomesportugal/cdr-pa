import { Field, InputType } from "type-graphql"

@InputType()
export class QuestionInput {
    @Field()
    area: string

    @Field()
    aspect: string

    @Field()
    description: string
}