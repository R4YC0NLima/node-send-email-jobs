import Queue from 'bull';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';


const registrationMail      = new Queue('RegistrationMail');
// const userReport            = new Queue('UserReport');
const serverAdapter         = new ExpressAdapter();
const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
    queues: [
        new BullAdapter(registrationMail),
        // new BullAdapter(userReport),
    ],
    serverAdapter: serverAdapter
});




// serverAdapter.setBasePath('/admin/queues');
// app.use('/admin/queues', serverAdapter.getRouter());

