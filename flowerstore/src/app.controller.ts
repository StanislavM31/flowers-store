
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService){}

<<<<<<< HEAD:src/app.controller.ts
  @Get('new-order')
  sendMessage(): string {
    this.appService.sendMessage();
    return 'Message sent';
=======
  @Get()
  sendMesage(): string {
    this.appService.sendMessage()
    return 'Message from app.controller.ts !';
>>>>>>> master:flowerstore/src/app.controller.ts
  }
}
