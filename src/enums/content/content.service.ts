import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';
import { Estado, Tipo } from 'src/enums/content.enum';
import { CreateContentInput } from './dto/create-content.input';
import { UpdateContentInput } from './dto/update-content.input';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contenidoRepository: Repository<Content>,
  ) {}

  // Crear un nuevo contenido
  async create(createContenidoInput: CreateContentInput): Promise<Content> {
    const newContenido = this.contenidoRepository.create(createContenidoInput);
    return await this.contenidoRepository.save(newContenido);
  }

  // Obtener todos los contenidos con paginación
  async findAll(skip: number = 0, take: number = 10): Promise<Content[]> {
    const content = await this.contenidoRepository.find({
      skip,
      take,
    });
    return content;
  }

  // Obtener un contenido por ID
  async findOne(id: string): Promise<Content> {
    const contenido = await this.contenidoRepository.findOne({ where: { id } });
    if (!contenido) {
      throw new NotFoundException(`Contenido with ID ${id} not found`);
    }
    return contenido;
  }

  // Actualizar un contenido
  async update(
    id: string,
    updateContenidoInput: UpdateContentInput,
  ): Promise<Content> {
    const contenido = await this.contenidoRepository.preload({
      id,
      ...updateContenidoInput,
    });

    if (!contenido) {
      throw new NotFoundException(`Contenido with ID ${id} not found`);
    }

    return this.contenidoRepository.save(contenido);
  }

  // Eliminar un contenido
  async remove(id: string): Promise<Content> {
    const contenido = await this.findOne(id);
    await this.contenidoRepository.remove(contenido);
    return contenido;
  }

  // Buscar contenidos por tipo
  async findByTipo(tipo: Tipo): Promise<Content[]> {
    return this.contenidoRepository.find({ where: { tipo } });
  }

  // Buscar contenidos por estado
  async findByEstado(estado: Estado): Promise<Content[]> {
    return this.contenidoRepository.find({ where: { estado } });
  }
}
