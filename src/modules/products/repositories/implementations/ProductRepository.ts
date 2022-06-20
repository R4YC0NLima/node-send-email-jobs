import { getRepository, Repository } from "typeorm";
import { Product } from "../../entities/Product";
import { IProductsRepository, IProductRequestDTO } from "../IProductsRepository";

export class ProductRepository implements IProductsRepository {
    private repository: Repository<Product>;
    private static INSTANCE: ProductRepository;

    constructor() {
        this.repository = getRepository(Product);
    }  

    async destroy(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findById(id: string): Promise<Product> {
        const findId = await this.repository.findOne(id);

        return findId!;
    }

    public static getInstance(): ProductRepository {
        if (!ProductRepository.INSTANCE) {
          ProductRepository.INSTANCE = new ProductRepository();
        }
    
        return ProductRepository.INSTANCE;
    }
    

    async create(data: IProductRequestDTO): Promise<Product> {
        const category = this.repository.create({
            name            :   data.name,
            price           :   data.price,
            description     :   data.description,
            category        :   data.category
        });
        
        await this.repository.save(category);

        return category;
    }

    async update(id: string, data: Product): Promise<Product> {
        const category = await this.repository.findOne(id);

        if(!category){
          throw new Error("Produto não encontrado!");
        }

        await this.repository.update(category.id, data);

        return data;
    }

    async list(): Promise<Product[]> {
        const products = await this.repository.find();
        return products;
    }
}