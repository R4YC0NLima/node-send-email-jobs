import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
    constructor(private createProductUseCase: CreateProductUseCase) {}

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {
            const user = await this.createProductUseCase.execute(data);

            return response.status(201).json(user);
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }


}