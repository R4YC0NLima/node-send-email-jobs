import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase){}

    async handle(request: Request, response: Response) : Promise<Response> {
        const allCategorys = await this.listCategoryUseCase.execute();
        return response.json(allCategorys);
    }
}
export { ListCategoryController }