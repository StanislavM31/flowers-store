import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FlowersModule } from './flowers/flowers.module';


@Module({
  imports: [FlowersModule]
})
export class AppModule { }
