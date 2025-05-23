import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import product from './route/productRoutes';
import cors from 'cors'

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3003'], 
    credentials: true,
}));

app.use('/api/products', product)

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("My first server!");
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}/api/products`)
})

  