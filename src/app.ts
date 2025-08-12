import express, { json } from 'express';
import router from './routes';
import cors from 'cors';

function createApp() {
    const app = express();

    app.use(json())
    app.use('/api', router)

    // const corsOptions = {
    //     origin: '*', // Allow all origins
    //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //     allowedHeaders: 'Content-Type, Authorization',
    // }

    app.use(cors())

    return app;
}

export default createApp;
