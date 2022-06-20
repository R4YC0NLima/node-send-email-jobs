import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICategoryRequestDTO } from "../ICategoriesRepository";

export class CategoryRepository implements ICategoriesRepository {
    private repository: Repository<Category>;
    private static INSTANCE: CategoryRepository;

    constructor() {
        this.repository = getRepository(Category);
    }  

    async destroy(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findById(id: string): Promise<Category> {
        const findId = await this.repository.findOne(id);

        
        return findId!;
    }

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
          CategoryRepository.INSTANCE = new CategoryRepository();
        }
    
        return CategoryRepository.INSTANCE;
    }
    

    async create(data: ICategoryRequestDTO): Promise<Category> {
        const category = this.repository.create({
            name        :   data.name,
            description :   data.description
        });
        
        await this.repository.save(category);

        return category;
    }

    async update(id: string, data: Category): Promise<Category> {
        const category = await this.repository.findOne(id);

        if(!category){
          throw new Error("Categoria não encontrado!");
        }

        await this.repository.update(category.id, data);

        return data;
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
}