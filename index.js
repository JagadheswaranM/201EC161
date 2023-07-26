import express from 'express';
import bodyParser from 'body-parser';
import { getNumbers, getPrime, getFibo, getOdd, getEven } from './controllers/index.js';

const app = express();
const PORT = 3000;

app.get('/numbers', getNumbers);
app.get('/numbers/prime', getPrime);
app.get('/numbers/fibo', getFibo);
app.get('/numbers/odd', getOdd);
app.get('/numbers/even', getEven);

app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});


