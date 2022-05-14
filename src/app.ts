import express from 'express';
import storeRouter from './routers/store';

const app = express();

app.use(express.json());
app.use(storeRouter);

export default app;
