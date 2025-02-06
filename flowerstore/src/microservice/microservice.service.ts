<<<<<<< HEAD:src/microservice/microservice.service.ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class MicroserviceService {
  handleMessage(message: string) {
    console.log("microservice:", message);
  }
=======
import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
    handleMessage(message: string){
        console.log('microsevice.service.ts-message:', message);
    }
>>>>>>> master:flowerstore/src/microservice/microservice.service.ts
}
