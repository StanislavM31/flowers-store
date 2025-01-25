import { Controller, Get, Query } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get('auth')
  @UseGuards(AuthGuard)
  auth() {
    return this.flowersService.findAll();
  }
  @Get('item')
  checkInt(@Query('itemNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.flowersService.findAll();
  }
  @Get()
  findAll() {
    return this.flowersService.findAll();
  }
  @Get('first')
  getFirstNumber() {
    return this.flowersService.getFirstFlower();
  }

}
