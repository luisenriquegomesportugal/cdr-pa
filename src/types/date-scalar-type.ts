import { GraphQLScalarType, Kind } from 'graphql'

export const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: Date) {
    return value.toUTCString()
  },
  parseValue(value: number) {
    return new Date(value)
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      case Kind.STRING: return new Date(Date.parse(ast.value))
      case Kind.INT: return new Date(ast.value)
      default: throw new Error("DateScalar cannot parse value");
    }
  },
});