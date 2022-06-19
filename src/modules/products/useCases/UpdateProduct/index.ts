import { ProductRepository } from "../../repositories/implementations/ProductRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export default (): UpdateProductController => {
    const productRepository         = new ProductRepository();
    const updateProductUseCase      = new UpdateProductUseCase(productRepository);
    const updateProductController   = new UpdateProductController(updateProductUseCase);

    return updateProductController;
}