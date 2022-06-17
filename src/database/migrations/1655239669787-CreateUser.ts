import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1655239669787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
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
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"password",
                        type:"varchar"
                    },
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
