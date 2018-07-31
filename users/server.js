const express = require('express')
const app = express()
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true  // only meant to be used for dev
}))

app.listen(4000, () => {
    console.log('Listening')
})
