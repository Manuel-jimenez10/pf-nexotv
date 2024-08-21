import { Module } from '@nestjs/common';
import { ContenidosService } from './contenidos.service';
import { ContenidosResolver } from './contenidos.resolver';

@Module({
  providers: [ContenidosResolver, ContenidosService],
})
export class ContenidosModule {}
