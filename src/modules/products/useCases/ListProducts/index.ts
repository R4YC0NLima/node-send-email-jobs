import { ProductRepository } from "../../repositories/implementations/ProductRepository";
import { ListProductController } from "./ListProductController";
import { ListProductUseCase } from "./ListProductUseCase";

export default(): ListProductController => {
    const productRepository         = new ProductRepository();
    const listProductUseCase        = new ListProductUseCase(productRepository);
    const listProductsController    = new ListProductController(listProductUseCase);

    return listProductsController;
}