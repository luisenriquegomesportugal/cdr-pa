import { Field, InputType } from "type-graphql"

@InputType()
export class CreateProducerInput {
    @Field()
    name: string

    @Field({nullable: true})
    description?: string
    
    @Field()
    chainId: string

    @Field()
    poleId: string

    @Field()
    userId: string
}