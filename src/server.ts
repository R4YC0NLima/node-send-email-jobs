import "reflect-metadata";
import 'dotenv/config';
import './database';
import './bull-dash';

import express from 'express';
import { route } from './routes';
import { routesUsers } from './modules/users/routes';

const port  = 3000 || process.env.PORT;
const app   = express();

app.use(express.json());
app.use(route);

route.use('/users', routesUsers);

app.listen(port, () => {
  console.log(`Running on port ${port}.`)
  console.log(`For the UI, open http://localhost:${port}/admin/queues.`)
  console.log(`Make sure Redis is running on port ${process.env.REDIS_PORT} by default.`)
});

export { app }