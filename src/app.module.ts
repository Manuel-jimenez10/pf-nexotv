import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ContenidosModule } from './contenidos/contenidos.module';
import { MetricazModule } from './metricaz/metricaz.module';
import { SuscriptionsModule } from './suscriptions/suscriptions.module';
import { SupportsModule } from './supports/supports.module';
import { ViewingsHistoriesModule } from './viewings-histories/viewings-histories.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeorm'),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UsersModule,
    ContenidosModule,
    MetricazModule,
    SuscriptionsModule,
    SupportsModule,
    ViewingsHistoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


