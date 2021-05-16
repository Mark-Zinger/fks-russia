const logger = require('logger');

module.exports = {
  "development": {
    "username": "mysql",
    "password": "mysql",
    "database": "fsk-database",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  "test": {
    "username": "mysql",
    "password": "mysql",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOSTNAME,
    "host": process.env.DB_PORT,
    // logging: msg => logger.debug(msg),
    "dialect": "mysql"
  }
}
