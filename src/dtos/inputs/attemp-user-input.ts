import { Field, InputType } from "type-graphql"

@InputType()
export class AttempUserInput {
    @Field()
    email: string

    @Field()
    password: string
}