import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const db = [
    {
        _id: 'ABCDEFG-1',
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        _id: 'ABCDEFG-2',
        title: 'City of Glass',
        author: 'Paul Auster',
    },
]

const typeDefs = `#graphql
    type Book {
        _id: String
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`

const resolvers = {
    Query: {
        books: () => db,
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})

console.log(`Server ready at: ${url}`)
