import { NonEmptyArray } from "type-graphql"
import { ChainsResolver } from "./chains-resolver"
import { FormsResolver } from "./form-resolver"
import { PolesResolver } from "./poles-resolver"
import { ProducersResolver } from "./producers-resolver"
import { UsersResolver } from "./users-resolver"

export const resolvers: NonEmptyArray<Function> = [
    UsersResolver,
    ChainsResolver,
    PolesResolver,
    ProducersResolver,
    FormsResolver
]