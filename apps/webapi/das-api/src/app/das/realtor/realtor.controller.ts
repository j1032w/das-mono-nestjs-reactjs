import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MongoQuery } from '../../common/mongo/MongoQuery';
import { RealtorRepository } from './realtor.repository';

@ApiTags('Realtor')
@Controller({
  path: 'realtor',
  version: '1',
})
export class RealtorController {
  constructor(private realtorRepository: RealtorRepository) {}

  // API title and description
  @ApiOperation({
    operationId: 'realtor_search',
    description: `Search realtor records`,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @HttpCode(200)
  @Post('search')
  async search(@Body() query: MongoQuery) {
    return await this.realtorRepository.search(query);
  }
}
