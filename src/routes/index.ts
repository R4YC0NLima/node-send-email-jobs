import express from 'express';
import { routesUsers } from "../modules/users/routes";
import { routesCategories } from "../modules/categories/routes";
import { routesProducts } from "../modules/products/routes";

const route   = express();
route.use('/users', routesUsers);
route.use('/categories', routesCategories);
route.use('/products', routesProducts);

export { route }