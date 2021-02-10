const { users, tasks } = require('../constants')
const uuid = require("uuid");

///Query Resolvers   and field level resolvers///////

module.exports = {
  Query: {
    tasks: () => tasks,
    task: (_, args) => tasks.find((task) => task.id === args.id),
  },
  Mutation: {
    createTask: (_, { input }) => {
      const task = { ...input, id: uuid.v4() };
      tasks.push(task);
      return task;
    },
  },
  //this below is a filed level resolver (Task is a field on User type)
  Task: {
    user: ({ userId }) => users.find((user) => user.id === userId)
  }
};
 