// Update with your config settings.

/**
 * @type { Object.<string, any> }
 */
module.exports = {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      database: 'my_db',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    }
};
