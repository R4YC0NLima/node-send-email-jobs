import UserController from "../controllers/UserController";
import { Request, Response, Router } from 'express';
import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

const routes = Router();

routes.get('/', (req: Request, res: Response) => res.send('Hello World!'));
routes.post('/users', UserController.store);

export { routes }