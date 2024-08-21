import { Injectable } from '@nestjs/common';
import { CreateContenidoInput } from './dto/create-contenido.input';
import { UpdateContenidoInput } from './dto/update-contenido.input';

@Injectable()
export class ContenidosService {
  create(createContenidoInput: CreateContenidoInput) {
    return 'This action adds a new contenido';
  }

  findAll() {
    return `This action returns all contenidos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contenido`;
  }

  update(id: number, updateContenidoInput: UpdateContenidoInput) {
    return `This action updates a #${id} contenido`;
  }

  remove(id: number) {
    return `This action removes a #${id} contenido`;
  }
}
