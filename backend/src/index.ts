import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { connectDb } from './db/conn'
import router from './routes/router';

const app = express();

app.use(cors())

// Permite a comunicação de dados via json
app.use(express.json());


// DB connection
connectDb()

// Routes
const routes = router

// todas as rotas que partem de /api vem do routes
app.use("/api", routes)

app.listen(3000, function () {
    
});