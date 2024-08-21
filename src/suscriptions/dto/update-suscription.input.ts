import { CreateSuscriptionInput } from './create-suscription.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSuscriptionInput extends PartialType(CreateSuscriptionInput) {
  @Field(() => Int)
  id: number;
}
