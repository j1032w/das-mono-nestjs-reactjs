import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { MongoFilter } from './MongoFilter';

export class MongoQuery {
  @ApiPropertyOptional({
    type: Object,
    description: 'filter',
  })
  @Type(() => MongoFilter)
  filter?: MongoFilter;
}
