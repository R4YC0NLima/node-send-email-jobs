import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

export class UpdateCategoryController {
    constructor(private updateCategoryUseCase: UpdateCategoryUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params

        try {
            const user = await this.updateCategoryUseCase.execute(id, request.body);

            return response.status(201).json(user);
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }


}