import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma:PrismaService,
    private readonly configService:ConfigService
  ){}
     findAll():Promise<Flower[]>{
      console.log(this.configService.get<EnumAppMode>('MODE'));
      return this.prisma.flower.findMany();
    }

    private flowers = [
      {
        name: 'rose',
        color: 'red',
        price: 10,
      },
      {
        name: 'daisy',
        color: 'white',
        price: 5,
      },
      {
        name: 'tulip',
        color: 'yellow',
        price: 7,
      },
      {
        name: 'camomille',
        color: 'blue',
        price: 12,
      },
    ];
    
    create (dto: CreateFlowersDto){
      return this.prisma.flower.create({
        data: dto,
      })
    }
/*     findAll() {
      return this.flowers;
    } */
  
    getFirstFlower() {
      console.log('qwertyuiop[]asdfghjkl');
      return this.flowers[0];
    }
  
    getFlowerByIndex(index: number) {
      return this.flowers[index];
    }
    getAuthItem(index: number){
      return this.flowers[index];
    }
    getAllFromDB():Promise<Flower[]>{
      console.log('qwertyuiop[]asdfghjkl');
      
      console.log(this.configService.get<EnumAppMode>('MODE'));
      return this.prisma.flower.findMany();
    }
  }
  