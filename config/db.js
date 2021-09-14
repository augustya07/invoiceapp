import mongoose from 'mongoose'

const connectDB  = async  () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    })

    console.log(`MongoDB connected to ${conn.connection.host}`)

}

export default  connectDB