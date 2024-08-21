import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ViewingsHistory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
