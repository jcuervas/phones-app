import { createConnection } from 'typeorm';
import { constants } from '../contants';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

export const databaseProviders = [
  {
    provide: constants.databaseConnection,
    useFactory: async () => {
      const isProd = process.env.NODE_ENV === 'production';
      const isTest = process.env.NODE_ENV === 'test';
      const options: ConnectionOptions = {
        type: 'mysql',
        host: isProd || isTest ? process.env.TYPEORM_HOST : 'localhost',
        port: isProd || isTest ? Number(process.env.TYPEORM_PORT) : 3309,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: ['migration/*{.ts,.js}'],
        cli: {
          migrationsDir: 'migration',
        },
        logging: true,
      };
      return createConnection(options);
    },
  },
];
