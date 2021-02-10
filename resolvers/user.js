const { users, tasks } = require('../constants')

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
  },
  Mutation: {
  },
  User: {
    task: ({ id }) => tasks.filter((task) => task.userId === id),
  },
};
