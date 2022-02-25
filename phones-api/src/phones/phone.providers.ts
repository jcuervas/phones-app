import { Connection } from 'typeorm';
import { Phone } from './entities/phone.entity';
import { constants } from '../contants';

export const phoneProviders = [
  {
    provide: constants.phoneRepository,
    useFactory: (connection: Connection) => connection.getRepository(Phone),
    inject: [constants.databaseConnection],
  },
];
