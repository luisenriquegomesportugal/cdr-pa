import { Field, InputType } from "type-graphql"

@InputType()
export class CreatePoleInput {
    @Field()
    name: string
}