import { Role } from 'src/auth/helpers/role.enum';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUserTable1641678061952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'enum',
            enum: ['user', 'admin'],
            default: "'user'",
          },
        ],
      }),
      false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE user`);
  }
}
