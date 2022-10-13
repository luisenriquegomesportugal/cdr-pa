import { Field, InputType } from "type-graphql"

@InputType()
export class AwnserFormInput {
    @Field(() => String!)
    producerId: string
    
    @Field(() => String!)
    formId: string

    @Field(() => [String]!)
    awnsers: string[]
}