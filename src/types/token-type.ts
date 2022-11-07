import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class TokenType {
    @Field()
    accessToken: string
    
    @Field()
    expirationTime: string
}