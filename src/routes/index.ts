import express from 'express';
import { routesUsers } from "../modules/users/routes";
import { routesCategories } from "../modules/categories/routes";

const route   = express();
route.use('/users', routesUsers);
route.use('/categories', routesCategories);

export { route }