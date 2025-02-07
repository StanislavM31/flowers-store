import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService, iUser } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getItemDB(): iUser[] | string{
    try {
      return this.appService.getAllItem();
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Post()
  postItemDB(@Body() obj: iUser):iUser[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }

  @Put('/:id')
  putItemDB(@Body() obj: iUser):iUser[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Delete('/:id')
  deleteItemDB(@Param('id') id: string): iUser[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return (error as Error).message;
    }
  }
  
  @Patch('/:id')
  PatchItemDB(@Body() obj: iUser, @Param('id') id: string): iUser[] | string{
    try {
      return this.appService.patchItem(obj,id)
    } catch (error) {
      return error.message;
    }
  }
}
