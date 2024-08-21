import { Injectable } from '@nestjs/common';
import { CreateSuscriptionInput } from './dto/create-suscription.input';
import { UpdateSuscriptionInput } from './dto/update-suscription.input';

@Injectable()
export class SuscriptionsService {
  create(createSuscriptionInput: CreateSuscriptionInput) {
    return 'This action adds a new suscription';
  }

  findAll() {
    return `This action returns all suscriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} suscription`;
  }

  update(id: number, updateSuscriptionInput: UpdateSuscriptionInput) {
    return `This action updates a #${id} suscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} suscription`;
  }
}
