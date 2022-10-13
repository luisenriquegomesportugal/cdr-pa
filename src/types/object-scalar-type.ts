import { GraphQLScalarType, Kind } from "graphql"

export const ObjectScalar = new GraphQLScalarType({
    name: 'ObjectScalar',
    description: 'ObjectScalar custom scalar type',
    serialize(value: object) {
        return value
    },
    parseValue(value: string) {
        return JSON.parse(value)
    },
    parseLiteral(ast) {
        switch (ast.kind) {
            case Kind.BOOLEAN: return ast.value
            case Kind.STRING: return JSON.parse(ast.value)
            case Kind.INT: return Number.parseInt(ast.value)
            case Kind.FLOAT: return Number.parseFloat(ast.value)
            case Kind.LIST: return ast.values.map(value => value)
            case Kind.OBJECT:
                let astObject: { [key: string]: object } = {}
                ast.fields
                    .forEach(field => astObject[field.name.value] = field.value)
                return astObject
            default: throw new Error("ObjectScalar cannot parse value");
        }
    }
});