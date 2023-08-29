import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1692980035462 implements MigrationInterface {
    name = 'Init1692980035462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "meta_version" integer NOT NULL, "meta_created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "meta_updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "fieldname" character varying NOT NULL, "originalname" character varying NOT NULL, "encoding" character varying NOT NULL, "mimetype" character varying NOT NULL, "size" integer NOT NULL, "bucket" character varying NOT NULL, "key" character varying NOT NULL, "acl" character varying NOT NULL, "content_type" character varying NOT NULL, "storage_class" character varying NOT NULL, "location" character varying NOT NULL, "etag" character varying NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "file"`);
    }

}
