import express from 'express';
import cors from 'cors';
import weatherRouter from './routes/weather.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/weather", weatherRouter);

app.listen(3333, ()=>{
    console.log('server is running on port 3333');
})