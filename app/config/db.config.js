const {
  Pool
} = require('pg')

const poolConfig = {
  connectionString: process.env.DATABASE_URL
}

if (process.env.NODE_ENV === 'production') {
  poolConfig.ssl = false
}

const pool = new Pool(poolConfig)

module.exports = pool