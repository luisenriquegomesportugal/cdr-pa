import { Field, InputType } from "type-graphql"
import { UserRoleType } from "../../types/role-user-type"

@InputType()
export class CreateUserInput {
    @Field(() => String!)
    name: string

    @Field(() => String!)
    email: string

    @Field(() => UserRoleType!)
    role: UserRoleType
}