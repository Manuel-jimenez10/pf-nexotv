import { CreateSupportInput } from './create-support.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSupportInput extends PartialType(CreateSupportInput) {
  @Field(() => Int)
  id: number;
}
