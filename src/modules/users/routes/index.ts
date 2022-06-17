import { Router } from "express";
import createUserController from '../useCases/CreateUser';
import listUsersController from '../useCases/ListUsers';

const routesUsers = Router();

routesUsers.post('/', (request, response) => {
    return createUserController().handle(request, response);
});

routesUsers.get('/', (request, response) => {
    return listUsersController().handle(request, response);
});

export { routesUsers }