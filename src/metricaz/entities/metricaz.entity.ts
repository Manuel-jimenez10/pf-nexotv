import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Metricaz {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
