import { Field, ObjectType } from "type-graphql"
import { UserRoleType } from "../../types/role-user-type"
import { Model } from "./model"

@ObjectType()
export class UserModel extends Model {
    @Field()
    name: string

    @Field()
    email: string
    
    @Field(() => UserRoleType!)
    role: UserRoleType
}