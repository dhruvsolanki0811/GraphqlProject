const express= require('express')
const dotenv= require('dotenv');
dotenv.config()

const schema= require('./schema/schema')
// const {graphQlHttp}= require('graphql-http')
const { createHandler } = require('graphql-http/lib/use/express')
// var { graphqlHTTP } = require('express-graphql');

const app= express()
const port = process.env.PORT || 5000

app.use('/graphql',createHandler({
    schema,
    // graphiql:process.env.NODE_ENV==='development',
    graphiql: true
}))
app.listen(port,console.log(`Server running on ${port} in ${process.env.NODE_ENV} ` ))

