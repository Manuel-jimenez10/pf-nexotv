import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Support {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
