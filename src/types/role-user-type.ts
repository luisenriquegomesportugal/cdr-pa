import { registerEnumType } from "type-graphql"

export enum UserRoleType {
    LORD = "lord",
    ADMIN = "admin",
    AGENT = "agent"
}

registerEnumType(UserRoleType, {
    name: "UserRoleType",
    description: "The user role",
})