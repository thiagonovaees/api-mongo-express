import mongoose from 'mongoose'

async function dbconnect() {
    // eslint-disable-next-line no-undef
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}

export default dbconnect
