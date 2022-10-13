import { Field, InputType } from "type-graphql"

@InputType()
export class ListProducerInput {
    @Field()
    userId: string
}