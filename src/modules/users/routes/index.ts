import { Router } from "express";
import createUserController from '../useCases/CreateUser';
import listUsersController from '../useCases/ListUsers';
import updateUserController from '../useCases/UpdateUser';
import destroyUserController from '../useCases/DestroyUser';

const routesUsers = Router();

routesUsers.get('/', (request, response) => {
    return listUsersController().handle(request, response);
});


routesUsers.post('/', (request, response) => {
    return createUserController().handle(request, response);
});

routesUsers.put('/:id', (request, response) => {
    return updateUserController().handle(request, response);
});

routesUsers.delete('/:id', (request, response) => {
    return destroyUserController().handle(request, response);
});

export { routesUsers }