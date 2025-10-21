import { InputType, Field, Int } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field(() => GraphQLString, { nullable: true })
  email?: string;

  @Field(() => GraphQLString, { nullable: true })
  name?: string | null;
}
