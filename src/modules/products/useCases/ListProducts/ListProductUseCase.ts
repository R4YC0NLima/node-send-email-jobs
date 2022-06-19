import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

class ListProductUseCase {
    constructor(private productRepository: IProductsRepository){}
    async execute(): Promise<Product[]> {
        const allProducts = await this.productRepository.list();
        return allProducts;
    }
}
export { ListProductUseCase };