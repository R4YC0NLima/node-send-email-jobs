import { Request, Response } from "express";
import { ListProductUseCase } from "./ListProductUseCase";

class ListProductController {
    constructor(private listProductUseCase: ListProductUseCase){}

    async handle(request: Request, response: Response) : Promise<Response> {
        const allProducts = await this.listProductUseCase.execute();
        return response.json(allProducts);
    }
}
export { ListProductController }