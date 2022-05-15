import express from 'express';
import ErrorMiddleware from './middlewares/error/errorsMiddleware';
import storeRouter from './routers/store';

const app = express();
const middleware = new ErrorMiddleware();

app.use(express.json());

app.use(storeRouter);

app.use(middleware.errorTreatment);

export default app;
