import { Field, InputType } from "type-graphql"

@InputType()
export class ListProducerInput {
    @Field(() => String!)
    userId: string
}