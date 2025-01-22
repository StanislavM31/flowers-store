import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
    findAll(){
        return [
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
        ]
    }
}
