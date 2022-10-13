import { GraphQLScalarType, Kind } from "graphql"

export const ObjectScalar = new GraphQLScalarType({
    name: 'ObjectScalar',
    description: 'ObjectScalar custom scalar type',
    serialize(value: Map<string, object>) {
        return value as Map<string, object>
    },
    parseValue(value: string) {
        return JSON.parse(value) as Map<string, object>
    },
    parseLiteral(ast) {
        switch (ast.kind) {
            case Kind.STRING: return JSON.parse(ast.value) as Map<string, object>
            case Kind.LIST: return ast.values
            case Kind.OBJECT: return ast.fields
            case Kind.INT:
            case Kind.FLOAT:
            case Kind.BOOLEAN: return ast.value
            default: throw new Error("ObjectScalar cannot parse value");
        }
    }
});