import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContenidosService } from './contenidos.service';
import { Contenido } from './entities/contenido.entity';
import { CreateContenidoInput } from './dto/create-contenido.input';
import { UpdateContenidoInput } from './dto/update-contenido.input';

@Resolver(() => Contenido)
export class ContenidosResolver {
  constructor(private readonly contenidosService: ContenidosService) {}

  @Mutation(() => Contenido)
  createContenido(@Args('createContenidoInput') createContenidoInput: CreateContenidoInput) {
    return this.contenidosService.create(createContenidoInput);
  }

  @Query(() => [Contenido], { name: 'contenidos' })
  findAll() {
    return this.contenidosService.findAll();
  }

  @Query(() => Contenido, { name: 'contenido' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contenidosService.findOne(id);
  }

  @Mutation(() => Contenido)
  updateContenido(@Args('updateContenidoInput') updateContenidoInput: UpdateContenidoInput) {
    return this.contenidosService.update(updateContenidoInput.id, updateContenidoInput);
  }

  @Mutation(() => Contenido)
  removeContenido(@Args('id', { type: () => Int }) id: number) {
    return this.contenidosService.remove(id);
  }
}
