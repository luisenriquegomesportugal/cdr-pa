import { Field, InputType } from "type-graphql"

@InputType()
export class AwnserFormInput {
    @Field()
    producerId: string
    
    @Field()
    formId: string

    @Field(() => [String!]!)
    awnsers: string[]
}