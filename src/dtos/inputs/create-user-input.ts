import { Field, InputType } from "type-graphql"
import { UserRoleType } from "../../types/role-user-type"

@InputType()
export class CreateUserInput {
    @Field()
    name: string

    @Field()
    email: string

    @Field(() => UserRoleType!)
    role: UserRoleType
}