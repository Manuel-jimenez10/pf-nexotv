import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateViewingsHistoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
