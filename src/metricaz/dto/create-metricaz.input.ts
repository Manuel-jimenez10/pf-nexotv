import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMetricazInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
