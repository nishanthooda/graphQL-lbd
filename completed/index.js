const express = require("express");
const graphqlHttp = require("express-graphql");
const graphqlSchema = require("./graphQL/schema");
const graphqlResolver = require("./graphQL/resolver");

const app = express();

app.get("/", (req, res) => {
  res.send("here");
});

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);

app.listen(8080, "localhost");
