module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'quickmail_db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'root',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost'
    }
  }
}
