import { CreateMetricazInput } from './create-metricaz.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMetricazInput extends PartialType(CreateMetricazInput) {
  @Field(() => Int)
  id: number;
}
