import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDto } from './flowers.dto';

@Injectable()
export class FlowersService {
  constructor(private readonly prisma:PrismaService){}
    async findAll():Promise<Flower[]>{
      return this.prisma.flower.findMany();
      
/*         return [
            {
                name: 'rose',
                color: 'red',
                price: 10
              },
              {
                name: 'daisy',
                color: 'white',
                price: 5
              },
              {
                name: 'tulip',
                color: 'yellow',
                price: 7
              },
              {
                name: 'camomille',
                color: 'blue',
                price: 12
              }
        ] */
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
      return this.flowers[0];
    }
  
    getFlowerByIndex(index: number) {
      return this.flowers[index];
    }
    getAuthItem(index: number){
      return this.flowers[index];
    }
  }
  