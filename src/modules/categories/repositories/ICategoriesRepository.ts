import { Category } from "../entities/Category";
export interface ICategoryRequestDTO {
    name        : string;
    description : string;
}

export interface ICategoriesRepository {
    findById(id:string): Promise<Category>;
    create(data: ICategoryRequestDTO): Promise<Category>;
    update(id: string, data: ICategoryRequestDTO): Promise<Category>;
    destroy(id: string): Promise<void>;
    list() : Promise<Category[]>
}