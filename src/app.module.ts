import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TypeOrmConfig from './config/database.config';

@Module({
  imports: [TypeOrmConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
