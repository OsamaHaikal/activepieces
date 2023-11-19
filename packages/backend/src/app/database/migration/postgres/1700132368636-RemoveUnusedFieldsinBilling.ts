import { MigrationInterface, QueryRunner } from 'typeorm'

export class RemoveUnusedFieldsinBilling1700132368636 implements MigrationInterface {
    name = 'RemoveUnusedFieldsinBilling1700132368636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "project_plan" DROP COLUMN "activeFlows"
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan" DROP COLUMN "botPlanName"
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan" DROP COLUMN "bots"
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan" DROP COLUMN "datasourcesSize"
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan" DROP COLUMN "datasources"
        `)
        await queryRunner.query(`
            ALTER TABLE "chatbot"
            ALTER COLUMN "visibilityStatus" DROP DEFAULT
        `)
        await queryRunner.query(`
            ALTER TABLE "chatbot"
            ALTER COLUMN "visibilityStatus" DROP DEFAULT
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "chatbot"
            ALTER COLUMN "visibilityStatus"
            SET DEFAULT 'PRIVATE'
        `)
        await queryRunner.query(`
            ALTER TABLE "chatbot"
            ALTER COLUMN "visibilityStatus"
            SET DEFAULT 'PRIVATE'
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan"
            ADD "datasources" integer NOT NULL DEFAULT '1'
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan"
            ADD "datasourcesSize" integer NOT NULL DEFAULT '10485760'
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan"
            ADD "bots" integer NOT NULL DEFAULT '1'
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan"
            ADD "botPlanName" character varying NOT NULL DEFAULT 'free'
        `)
        await queryRunner.query(`
            ALTER TABLE "project_plan"
            ADD "activeFlows" integer NOT NULL
        `)
    }

}
