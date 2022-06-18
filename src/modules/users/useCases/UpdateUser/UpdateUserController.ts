import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params

        try {
            const user = await this.updateUserUseCase.execute(id, request.body);

            return response.status(201).json(user);
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }


}