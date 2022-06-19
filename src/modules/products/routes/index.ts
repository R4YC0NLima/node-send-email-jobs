import { Router } from "express";
import createProductController from '../useCases/CreateProduct';
import listProductsController from '../useCases/ListProducts';
import updateProductController from '../useCases/UpdateProduct';
import destroyProductController from '../useCases/DestroyProduct';

const routesProducts = Router();

routesProducts.get('/', (request, response) => {
    return listProductsController().handle(request, response);
});


routesProducts.post('/', (request, response) => {
    return createProductController().handle(request, response);
});

routesProducts.put('/:id', (request, response) => {
    return updateProductController().handle(request, response);
});

routesProducts.delete('/:id', (request, response) => {
    return destroyProductController().handle(request, response);
});

export { routesProducts }