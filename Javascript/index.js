import express from 'express'
import expressGraphQL from 'express-graphql'

const app = express(),
      port = process.env.PORT || 8000;
const schema = require('./schema/schema');

app
    .use('/graphql', expressGraphQL({
        schema,
        graphiql: true
    }))
    .listen(port, () => console.log(`GraphQL running on port ${port}...`))
