require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./app/routes')

const PORT = process.env.PORT || 3500
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors({
  origin: '*'
}))

app.use('/api', routes)

// Test vim
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})