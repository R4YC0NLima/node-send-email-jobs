import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name!: string;

    @Column()
    description!: string;
}