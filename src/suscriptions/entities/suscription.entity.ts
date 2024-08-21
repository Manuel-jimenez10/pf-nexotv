import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Suscription {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
