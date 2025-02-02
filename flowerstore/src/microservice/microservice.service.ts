import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
    handleMessage(message: string){
        console.log('microsevice.service.ts-message:', message);
    }
}
