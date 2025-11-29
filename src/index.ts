import config from './config';
import express, { Express } from 'express';

const app: Express = express();
const port: string | number | undefined = config.port || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
