import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import authRoute from './routes/auth/auth-route.js'
import connectDatabase from './config/database.js'

const app = express();
const port = process.env.PORT

connectDatabase()


app.use(express.json())

app.use('/api/v1/auth', authRoute)


app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
