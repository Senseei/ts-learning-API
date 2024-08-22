import 'reflect-metadata';
import express from 'express';
import { IndexRouter } from './routers/index';
import AppDataSource from './data-source';
import dotenv from 'dotenv';

dotenv.config();

AppDataSource.getInstance().initialize().then(async () => {
    const app = express();
    const port = process.env.PORT ?? 3000;
    const router = IndexRouter.registerRouters();

    app.use(express.json());
    app.use('/api', router);

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch(error => console.log(error));