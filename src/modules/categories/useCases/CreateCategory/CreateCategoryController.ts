import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateUserController {
    constructor(private createUserUseCase: CreateCategoryUseCase) {}

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {
            const user = await this.createUserUseCase.execute(data);

            return response.status(201).json(user);
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }


}