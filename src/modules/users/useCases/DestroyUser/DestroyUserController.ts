import { Request, Response } from "express";
import { DestroyUserUseCase } from "./DestroyUserUseCase";

export class DestroyUserController {
    constructor(private DestroyUserUseCase: DestroyUserUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params

        try {
            await this.DestroyUserUseCase.execute(id);

            return response.status(201).json({ msg: 'Usuário removido com sucesso!'});
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }


}