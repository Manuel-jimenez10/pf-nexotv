import { Module } from '@nestjs/common';
import { SuscriptionsService } from './suscriptions.service';
import { SuscriptionsResolver } from './suscriptions.resolver';

@Module({
  providers: [SuscriptionsResolver, SuscriptionsService],
})
export class SuscriptionsModule {}
