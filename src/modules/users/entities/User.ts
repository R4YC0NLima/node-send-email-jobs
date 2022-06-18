import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column({select: false})
    password!: string;

    constructor(){ 
        this.id = uuidv4()
    }
}