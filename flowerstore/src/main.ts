import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT ?? 3000);
  console.log('HTTP app is listening on port 3000');
  
  const microserviseApp = await NestFactory.
  createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options:{
        host: 'localhost',
        port: 8877,
      }
    })
    await microserviseApp.listen()
    console.log('Microservice is listening on port 8877');
    
}
bootstrap();
