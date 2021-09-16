const productResolver = require('./product');
const userResolver = require('./user');
// const categoryResolver = require('./category');

module.exports = {
    Query: {
        ...productResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation
    }
};