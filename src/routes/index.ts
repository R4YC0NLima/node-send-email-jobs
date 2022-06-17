import express from 'express';
import { routesUsers } from "../modules/users/routes";

const route   = express();
route.use('/users', routesUsers);

export { route }