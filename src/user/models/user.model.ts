import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field(() => GraphQLString, { nullable: true })
  name: string | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
