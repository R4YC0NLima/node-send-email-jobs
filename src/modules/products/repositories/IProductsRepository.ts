import { Category } from "../../categories/entities/Category";
import { Product } from "../entities/Product";
export interface IProductRequestDTO {
    name        : string;
    price       : number;
    description : string;
    category    : Category;
}

export interface IProductsRepository {
    findById(id:string): Promise<Product>;
    create({ name, price, description, category }: IProductRequestDTO): Promise<Product>;
    update(id: string, data: IProductRequestDTO): Promise<Product>;
    destroy(id: string): Promise<void>;
    list() : Promise<Product[]>
}