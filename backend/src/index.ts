import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { main } from './db/conn'
import router from './routes/router';

const app = express();
const port = 3333
app.use(cors())

// Permite a comunicação de dados via json
app.use(express.json());


// DB connection
main()

// Routes
const routes = router

// todas as rotas que partem de /api vem do routes
app.use("/api", routes)

app.listen(port, function () {
    console.log("Working on:", port)
});