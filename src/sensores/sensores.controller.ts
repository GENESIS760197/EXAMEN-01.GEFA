import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SensoresService } from './sensores.service';

@Controller('sensores')
export class SensoresController {

  constructor(private readonly sensoresService: SensoresService) {}

  @Get()
  findAll() {
    return this.sensoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sensoresService.findOne(id);
  }

  @Post()
  create(@Body() sensor) {
    return this.sensoresService.create(sensor);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() sensor) {
    return this.sensoresService.update(id, sensor);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sensoresService.remove(id);
  }

}
