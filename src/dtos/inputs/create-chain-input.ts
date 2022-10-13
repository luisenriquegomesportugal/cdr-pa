import { Field, InputType } from "type-graphql"

@InputType()
export class CreateChainInput {
    @Field()
    name: string
}