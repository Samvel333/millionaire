import { join } from 'path';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'millionaire12',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],

  synchronize: false,
  migrations: ["dist/migration/*{.ts,.js}"],
  cli: {
    migrationsDir: 'migration',
  },
  migrationsTableName: 'migrations',
  migrationsRun: true,
};

export default config;
