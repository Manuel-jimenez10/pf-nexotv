import { CreateContenidoInput } from './create-contenido.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContenidoInput extends PartialType(CreateContenidoInput) {
  @Field(() => Int)
  id: number;
}
