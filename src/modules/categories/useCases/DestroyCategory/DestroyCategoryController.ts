import { Request, Response } from "express";
import { DestroyCategoryUseCase } from "./DestroyCategoryUseCase";

export class DestroyCategoryController {
    constructor(private DestroyCategoryUseCase: DestroyCategoryUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params

        try {
            await this.DestroyCategoryUseCase.execute(id);

            return response.status(201).json({ msg: 'Usuário removido com sucesso!'});
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }


}