import "reflect-metadata"

import * as dotenv from 'dotenv'
dotenv.config()

import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import { resolvers } from "./resolvers"

async function bootstrap() {
    const schema = await buildSchema({ resolvers })

    const server = new ApolloServer({ schema })
    const { url } = await server.listen({port: process.env.PORT || 4000})

    console.log(`Running on ${url}`)
}

bootstrap()