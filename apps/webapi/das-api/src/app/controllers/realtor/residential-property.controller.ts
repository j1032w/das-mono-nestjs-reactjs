import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import {ResidentialPropertyService} from '../../core/applications/realtors';
import {ResidentialProperty} from '../../core/domains';

import {ResidentialPropertyQuery} from './residential-property-query';


@ApiTags('realtor/residential-property')
@Controller({
  path: 'realtor/residential-property',
  version: '1',
})
export class ResidentialPropertyController {
  constructor(private residentialPropertyService: ResidentialPropertyService) {
  }


  @ApiOperation({
    operationId: 'realtor_residential_property_find_by_id',
    description: `Get residential property by id`,

  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the residential property',
    example: '5f7f1b9a-3b7a-4b0a-8b0a-0b0a0b0a0b0a',
  })
  @ApiResponse({status: 400, description: 'Bad request'})
  @HttpCode(200)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.residentialPropertyService.findOneAsync(id);
  }


  @ApiOperation({
    operationId: 'realtor_residential_property_update_one',
    description: `Get residential property by id`,

  })
  @ApiResponse({status: 400, description: 'Bad request'})
  @HttpCode(200)
  @Post()
  async insertOne(@Body() residentialProperty: ResidentialProperty) {
    return await this.residentialPropertyService.insertOneAsync(residentialProperty);
  }


  @ApiOperation({
    operationId: 'realtor_residential_property_update_one',
    description: `Get residential property by id`,

  })
  @ApiResponse({status: 400, description: 'Bad request'})
  @HttpCode(200)
  @Patch()
  async updateOne(@Body() residentialProperty: ResidentialProperty) {
    return await this.residentialPropertyService.updateOneAsync(residentialProperty);
  }



  @ApiOperation({
    operationId: 'realtor_residential_property_find',
    description: `Search residential properties`,

  })
  @ApiBody({
    description: '',
    type: ResidentialPropertyQuery
  })
  @ApiResponse({status: 400, description: 'Bad request'})
  @HttpCode(200)
  @Post('find')
  async find(@Body() query: ResidentialPropertyQuery) {
    return await this.residentialPropertyService.findAsync(query);
  }


  @ApiOperation({
    operationId: 'realtor_residential_property_delete_by_id',
    description: `Delete residential property by id`,

  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the residential property',
    example: '5f7f1b9a-3b7a-4b0a-8b0a-0b0a0b0a0b0a',
  })
  @ApiResponse({status: 400, description: 'Bad request'})
  @HttpCode(200)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.residentialPropertyService.deleteOneAsync(id);
  }


}
