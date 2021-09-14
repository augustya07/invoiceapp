import express  from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


import connectDB from './config/db.js'

//Roues files
import auth from './routes/auth.js'

dotenv.config()

connectDB()

const app = express();

// Body parser
app.use(express.json())


//  Cookie parser
app.use(cookieParser())


//Mount Routers

app.use('/api/v1/auth', auth)


const PORT = process.env.PORT || 4000

const server = app.listen(PORT,
    console.log(`server is running in  ${process.env.NODE_ENV} at ${PORT}`
    )
)

