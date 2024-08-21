import { Injectable } from '@nestjs/common';
import { CreateSupportInput } from './dto/create-support.input';
import { UpdateSupportInput } from './dto/update-support.input';

@Injectable()
export class SupportsService {
  create(createSupportInput: CreateSupportInput) {
    return 'This action adds a new support';
  }

  findAll() {
    return `This action returns all supports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} support`;
  }

  update(id: number, updateSupportInput: UpdateSupportInput) {
    return `This action updates a #${id} support`;
  }

  remove(id: number) {
    return `This action removes a #${id} support`;
  }
}
