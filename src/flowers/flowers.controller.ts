import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInterCeptor } from 'src/conception/interceptor';

@Controller('flowers')
@UseInterceptors(LoggingInterCeptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get('auth')
  @UseGuards(AuthGuard)
  auth() {
    return this.flowersService.findAll();
  }
  @Get('item')
  checkInt(@Query('itemNumber', ParseIntPipe) itemNumber: number) {
    const flower = this.flowersService.getFlowerByIndex(itemNumber);
    console.log('Flower retrieved:', flower);
    return flower;
  }
  @Get()
  findAll() {
    return this.flowersService.findAll();
  }
  @Get('first')
  getFirstNumber() {
    return this.flowersService.getFirstFlower();
  }
  @Get('auth-item')
  getAuthorizedItem(@Query('item', ParseIntPipe) item: number){
    return this.flowersService.getAuthItem(item);
  }

}
