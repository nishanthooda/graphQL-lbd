const express = require('express')
const graphqlHttp = require('express-graphql');
const graphqlSchema = require('./graphQL/schema');
const graphqlResolver = require('./graphQL/resolver');

const app = express()

app.get("/test", (req, res) => {
    res.send("working");
})

app.listen(8080, "localhost")