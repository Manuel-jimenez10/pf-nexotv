import { Module } from '@nestjs/common';
import { MetricazService } from './metricaz.service';
import { MetricazResolver } from './metricaz.resolver';

@Module({
  providers: [MetricazResolver, MetricazService],
})
export class MetricazModule {}
