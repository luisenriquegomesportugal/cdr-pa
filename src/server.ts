import "reflect-metadata"

import * as dotenv from 'dotenv'
dotenv.config()

import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { buildSchema } from "type-graphql"
import { resolvers } from "./resolvers"

async function bootstrap() {
    const schema = await buildSchema({ resolvers })
    const server = new ApolloServer({ schema })

    const port = Number.parseInt(process.env.PORT || '4000')
    const { url } = await startStandaloneServer(server, { listen: {port}})

    console.log(`Running on ${url}`)
}

bootstrap()