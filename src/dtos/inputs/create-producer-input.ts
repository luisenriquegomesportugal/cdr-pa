import { Field, InputType } from "type-graphql"

@InputType()
export class CreateProducerInput {
    @Field(() => String!)
    name: string

    @Field(() => String, {nullable: true})
    description?: string
    
    @Field(() => String!)
    chainId: string

    @Field(() => String!)
    poleId: string

    @Field(() => String!)
    userId: string
}