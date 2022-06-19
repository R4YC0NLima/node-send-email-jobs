import { Column, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../categories/entities/Category";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name!: string;

    @Column()
    price!: number;

    @Column()
    description!: string;

    @OneToOne(() => Category)
    @JoinTable()
    category!: Category;
}