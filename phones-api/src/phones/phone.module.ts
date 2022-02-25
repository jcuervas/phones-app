import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { phoneProviders } from './phone.providers';
import { databaseProviders } from '../database/database.providers';

@Module({
  controllers: [PhoneController],
  providers: [PhoneService, ...phoneProviders, ...databaseProviders],
})
export class PhoneModule {}
