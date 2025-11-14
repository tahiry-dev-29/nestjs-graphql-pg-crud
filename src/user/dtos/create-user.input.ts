import { InputType, Field } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field(() => GraphQLString, { nullable: true })
  name?: string | null;
}
