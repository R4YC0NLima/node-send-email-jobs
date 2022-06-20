import { ProductRepository } from "../../repositories/implementations/ProductRepository";
import { DestroyProductController } from "./DestroyProductController";
import { DestroyProductUseCase } from "./DestroyProductUseCase";

export default (): DestroyProductController => {
    const productRepository         = new ProductRepository();
    const destroyProductUseCase     = new DestroyProductUseCase(productRepository);
    const destroyProductController  = new DestroyProductController(destroyProductUseCase);

    return destroyProductController;
}