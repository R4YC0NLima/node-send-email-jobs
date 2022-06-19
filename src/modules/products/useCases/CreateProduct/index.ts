import { ProductRepository } from "../../repositories/implementations/ProductRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

export default (): CreateProductController => {
    const productRepository         = new ProductRepository();
    const createProductUseCase      = new CreateProductUseCase(productRepository);
    const createProductController   = new CreateProductController(createProductUseCase);

    return createProductController;
}