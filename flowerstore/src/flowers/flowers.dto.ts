import {IsNumber, IsString} from 'class-validator'

export class CreateFlowersDto{
    @IsString({
        message: 'name не строка!'
    })
    name: string
    
    @IsString()
    color:string

    @IsNumber()
    price:number
}

export type TUpdateFlowers = Partial<CreateFlowersDto>