import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class MongoFilter {
  @ApiPropertyOptional({
    type: Object,
    isArray: true,
    description: 'and',    
  })
  @Type(() => MongoFilter)
  and?: MongoFilter[];

  @ApiPropertyOptional({
    type: Object,
    isArray: true,
    description: 'or',
  })
  @Type(() => MongoFilter)
  or?: MongoFilter[];

  @ApiPropertyOptional({
    type: Object,
    isArray: true,
    description: 'nor',
  })
  @Type(() => MongoFilter)
  nor?: MongoFilter[];
}
