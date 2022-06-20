import { Request, Response } from "express";
import { DestroyProductUseCase } from "./DestroyProductUseCase";

export class DestroyProductController {
    constructor(private DestroyProductUseCase: DestroyProductUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params

        try {
            await this.DestroyProductUseCase.execute(id);

            return response.status(201).json({ msg: 'Usuário removido com sucesso!'});
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }


}