import express from 'express';
import cors from 'cors';
import { main } from './db/conn'

const app = express();

app.use(cors())

// Permite a comunicação de dados via json
app.use(express.json());


// DB connection

main()

app.listen(3000, function () {

});