import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
    constructor(private updateProductUseCase: UpdateProductUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params

        try {
            const user = await this.updateProductUseCase.execute(id, request.body);

            return response.status(201).json(user);
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }


}