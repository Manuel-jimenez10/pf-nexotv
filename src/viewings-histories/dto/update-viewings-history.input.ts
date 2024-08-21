import { CreateViewingsHistoryInput } from './create-viewings-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateViewingsHistoryInput extends PartialType(CreateViewingsHistoryInput) {
  @Field(() => Int)
  id: number;
}
