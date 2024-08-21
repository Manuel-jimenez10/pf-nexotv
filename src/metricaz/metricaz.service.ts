import { Injectable } from '@nestjs/common';
import { CreateMetricazInput } from './dto/create-metricaz.input';
import { UpdateMetricazInput } from './dto/update-metricaz.input';

@Injectable()
export class MetricazService {
  create(createMetricazInput: CreateMetricazInput) {
    return 'This action adds a new metricaz';
  }

  findAll() {
    return `This action returns all metricaz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metricaz`;
  }

  update(id: number, updateMetricazInput: UpdateMetricazInput) {
    return `This action updates a #${id} metricaz`;
  }

  remove(id: number) {
    return `This action removes a #${id} metricaz`;
  }
}
