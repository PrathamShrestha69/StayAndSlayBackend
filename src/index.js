import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './lib/dbConnect.js';
import formRouter from './routes/form.route.js';

dotenv.config();
const app = express();

app.use(cors({origin:'*'}));

app.use(express.json());

app.use('/api',formRouter);

connectDB();

app.listen(3000 || process.env.PORT,()=>{
  console.log(`Server is running on port : https://localhost:${process.env.PORT}`);
})