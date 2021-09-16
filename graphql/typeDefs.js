const { gql } = require('apollo-server');

const typeDefs = gql`
    type Product {
        _id: ID!
        title: String!
        price: String!
        description: String!
        productPhotoPath: String!
    }
    type User {
        _id: ID!
        firstname: String!
        lastname: String!
        token: String!
    }
    input RegisterInput {
        firstname: String!
        lastname: String!
        email: String!
        password: String!
    }
    type Query {
        getProducts: [Product]
    }
    type Mutation {
        register(registerInput: RegisterInput): User! {
        }
    }
`;

module.exports = typeDefs;