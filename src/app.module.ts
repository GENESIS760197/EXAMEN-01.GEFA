import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensoresModule } from './sensores/sensores.module';

@Module({
  imports: [SensoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
