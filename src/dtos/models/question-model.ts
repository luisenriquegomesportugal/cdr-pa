import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class QuestionModel {
    @Field()
    area: string

    @Field()
    aspect: string

    @Field()
    description: string
}