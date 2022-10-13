import { Field, InputType } from "type-graphql"

@InputType()
export class CreateChainInput {
    @Field(() => String!)
    name: string
}