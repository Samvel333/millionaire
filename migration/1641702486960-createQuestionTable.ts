import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createQuestionTable1641702486960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'question',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'gamequestion',
            type: 'varchar',
          },
          {
            name: 'answers',
            type: 'varchar',
          },
          {
            name: 'theTrueVariant',
            type: 'int',
          },
          
        ],
      }),
      false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE question`);
  }
}
