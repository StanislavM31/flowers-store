import { Body, Controller, Get, Post, Query, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInterCeptor } from 'src/conception/interceptor';
import { CreateFlowersDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggingInterCeptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

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
/*   @Get()
  findAll() {
    return this.flowersService.findAll();
  } */
  @Get('first')
  getFirstNumber() {
    return this.flowersService.getFirstFlower();
  }
  @Get('auth-item')
  getAuthorizedItem(@Query('item', ParseIntPipe) item: number) {
    return this.flowersService.getAuthItem(item);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  getAllFromDB() {
    return this.flowersService.getAllFromDB();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateFlowersDto) {
    return this.flowersService.create(dto);
  }

}
