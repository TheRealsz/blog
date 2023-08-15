import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())

// Permite a comunicação de dados via json
app.use(express.json());

app.listen(3000, function () {

});