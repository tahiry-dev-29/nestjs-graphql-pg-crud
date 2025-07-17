import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // The 'autoSchemaFile' property tells NestJS to generate the schema automatically.
      // It will look for @Query(), @Mutation(), @Subscription() decorators.
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // Set sortSchema to true for consistent schema ordering.
      sortSchema: true,
      // Enable playground for easy testing of GraphQL queries.
      playground: true,
    }),
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
