import UserController from "../controllers/UserController";
import { createUserController } from "../useCases/CreateUser";
import { Request, Response, Router } from 'express';

const routes = Router();
routes.get('/', (req: Request, res: Response) => res.send('Hello World!'));
routes.post('/users', UserController.store);

// routes.post('/users', (request, response) => {
//     return createUserController.handle(request, response);
// });

export { routes }