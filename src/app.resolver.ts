import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello from NestJS GraphQL! 👋';
  }

  @Query(() => String)
  serverStatus(): string {
    return 'Server is up and running! ✅';
  }
}
