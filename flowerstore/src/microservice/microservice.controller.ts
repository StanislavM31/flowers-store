import { Controller } from '@nestjs/common';
<<<<<<< HEAD:src/microservice/microservice.controller.ts
import { MicroserviceService } from './microservice.service';
import { EventPattern } from '@nestjs/microservices';
=======
import { EventPattern } from '@nestjs/microservices';
import { MicroserviceService } from './microservice.service';
>>>>>>> master:flowerstore/src/microservice/microservice.controller.ts

@Controller()
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}
<<<<<<< HEAD:src/microservice/microservice.controller.ts

  @EventPattern('message')
  handleMessage(message: string){
    this.microserviceService.handleMessage(message)
  }
=======
    @EventPattern('message')
    handleMessage(message: string){
      this.microserviceService.handleMessage(message)
    }
>>>>>>> master:flowerstore/src/microservice/microservice.controller.ts
}
