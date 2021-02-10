const { gql } = require("apollo-server-express");

//use gql from apollo server to define the Schema
module.exports = gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    task: [Task!]
  }
`;
