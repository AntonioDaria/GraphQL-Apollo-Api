const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const dotEnv = require("dotenv");

const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

// set env variables
dotEnv.config();

const app = express();

//cors
app.use(cors());

// body parser middlewares
app.use(express.json());


//apollo server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening for request on port ${PORT}`);
  console.log(`Graphql Endpoint: ${apolloServer.graphqlPath}`);
});

