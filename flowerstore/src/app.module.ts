import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './conception/middleware';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal:true,
  }),
  FlowersModule,
  MicroserviceModule,
  ClientsModule.register([
    {
      name: "ORDER_SERVICE",
      transport: Transport.TCP,
      options:{
       host: 'localhost',
       port: 8877, 
      }
    }
  ])
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers')
  }
  }
