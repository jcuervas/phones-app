import { Module } from '@nestjs/common';
import { PhoneModule } from './phones/phone.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, PhoneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
