import { Module } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [FlowersModule, ConfigModule.forRoot({
    isGlobal:true,
  })]
})
export class AppModule { }
