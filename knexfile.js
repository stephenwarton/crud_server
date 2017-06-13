module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/todolist'
  },

  production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
  }

};
