import { Router } from "express";
import createCategoryController from '../useCases/CreateCategory';
import listCategoriesController from '../useCases/ListCategories';
import updateCategoryController from '../useCases/UpdateCategory';
import destroyCategoryController from '../useCases/DestroyCategory';

const routesCategories = Router();

routesCategories.get('/', (request, response) => {
    return listCategoriesController().handle(request, response);
});


routesCategories.post('/', (request, response) => {
    return createCategoryController().handle(request, response);
});

routesCategories.put('/:id', (request, response) => {
    return updateCategoryController().handle(request, response);
});

routesCategories.delete('/:id', (request, response) => {
    return destroyCategoryController().handle(request, response);
});

export { routesCategories }