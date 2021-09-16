require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const connectDb = require('./utils/connectDb');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

connectDb(process.env.MONGO_URL);

server.listen({ port: 5000 })
    .then(res => {
        console.log(`server running at ${res.url}`)
    })