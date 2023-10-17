import {
  ApiOperation,
  ApiPropertyOptional
} from '@nestjs/swagger';
import {IsOptional} from 'class-validator';
import {ResidentialProperty} from '../../core/domains';
import {MongoRepositoryGeneric} from '../../infrastructures/mongo/repositories/mongo-repository.generic';


export class ResidentialPropertyQuery extends MongoRepositoryGeneric<ResidentialProperty> {

  @ApiPropertyOptional({
    description: 'The unique identifier of the residential property',
    example: '5f7f1b9a-3b7a-4b0a-8b0a-0b0a0b0a0b0a',
  })
  @IsOptional()
  public id?: string;

  @ApiPropertyOptional({
    description: 'The value of the residential property',
    example: '1199000',
  })
  @IsOptional()
  priceUnformattedValue?: number;

  @ApiPropertyOptional({
    description: 'The type of the residential property',
    example: 'Single Family',
  })
  @IsOptional()
  propertyType?: string;


  @ApiPropertyOptional({
    description: 'The number of bedrooms of the residential property',
    example: 1,
  })
  @IsOptional()
  buildingBathroomTotal?: number;


  @ApiPropertyOptional({
    description: 'The number of bedroom of the residential property',
    example: 2,
  })
  @IsOptional()
  buildingBedroom?: number;



  @ApiPropertyOptional({
    description: 'The province of the residential property',
    example: 'Alberta',
  })
  @IsOptional()
  public provinceName?: string;


  @ApiPropertyOptional({
    description: 'The building type of the residential property',
    example: 'House',
  })
  buildingType?: string;



  @ApiPropertyOptional({
    description: 'The city of the residential property',
    example: 'Calgary',
  })
  @IsOptional()
  public city?: string;
}
