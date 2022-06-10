require('dotenv/config');
import express from 'express';
import { routes} from './routes';
import Queue from 'bull';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';

const registrationMail      = new Queue('RegistrationMail');
const userReport            = new Queue('UserReport');
const serverAdapter         = new ExpressAdapter();
const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
    queues: [
        new BullAdapter(registrationMail),
        new BullAdapter(userReport),
    ],
    serverAdapter: serverAdapter
});

const app   = express();
const port  = 3000 || process.env.PORT;

app.use(express.json());
app.use(routes);

serverAdapter.setBasePath('/admin/queues');
app.use('/admin/queues', serverAdapter.getRouter());
app.listen(port, () => console.log(`Running on port ${port}`));

