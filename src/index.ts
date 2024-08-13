import  express from 'express';
import { PersonController } from './controllers/person-controller';

const app = express();
const port = 3000;

app.use(express.json());

const personController = new PersonController();

app.use('/api/persons', personController.getRouter());

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});