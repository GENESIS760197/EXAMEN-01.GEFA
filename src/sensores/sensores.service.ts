import { Injectable } from '@nestjs/common';
import { Sensor } from './sensor.entity';

@Injectable()
export class SensoresService {

  private sensores: Sensor[] = [];

  findAll() {
    return this.sensores;
  }

  findOne(id: number) {
    return this.sensores.find(sensor => sensor.id === id);
  }

  create(sensor: Sensor) {
    this.sensores.push(sensor);
    return sensor;
  }

  update(id: number, sensor: Sensor) {
    const index = this.sensores.findIndex(s => s.id === id);
    this.sensores[index] = sensor;
    return sensor;
  }

  remove(id: number) {
    this.sensores = this.sensores.filter(s => s.id !== id);
  }

}
