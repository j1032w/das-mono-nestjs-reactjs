import {IsNotEmpty, IsNumber, IsNumberString} from 'class-validator';

export class ResidentialPropertyDto {

  @IsNumber()
  @IsNumberString()
  @IsNotEmpty()
  public id: number = 0;


}

