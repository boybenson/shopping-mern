import dotenv from 'dotenv'
dotenv.config()
import express from "express";

import connectDatabase from './config/database.js'

const app = express();
const port = process.env.PORT

connectDatabase()

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
