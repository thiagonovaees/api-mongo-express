import express from 'express'
import dbconnect from './config/dbconnect.js'
import routes from './routes/index.js'

const connection = await dbconnect()

connection.on('error', (error) => {
    console.error('Connection error', error)
})

connection.once('open', () => {
    console.log('Connection to the database successful')
})

const app = express()
app.use(express.json())
routes(app)

export default app