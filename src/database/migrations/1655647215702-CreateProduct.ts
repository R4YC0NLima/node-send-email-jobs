import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProduct1655647215702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"products",
                columns: [
                    {
                        name:"id",
                        type:"uniqueidentifier",
                        isPrimary:true,
                        generationStrategy:"uuid"
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"price",
                        type:"decimal"
                    },
                    {
                        name:"category",
                        type:"varchar"
                    },
                    {
                        name:"description",
                        type:"varchar"
                    },
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            "products", 
            new TableForeignKey({
                columnNames:["category"],
                referencedColumnNames:["id"],
                referencedTableName:"categories"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("products","category");
        await queryRunner.dropTable('products');
    }

}
