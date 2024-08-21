import { Module } from '@nestjs/common';
import { ViewingsHistoriesService } from './viewings-histories.service';
import { ViewingsHistoriesResolver } from './viewings-histories.resolver';

@Module({
  providers: [ViewingsHistoriesResolver, ViewingsHistoriesService],
})
export class ViewingsHistoriesModule {}
