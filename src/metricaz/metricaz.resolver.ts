import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MetricazService } from './metricaz.service';
import { Metricaz } from './entities/metricaz.entity';
import { CreateMetricazInput } from './dto/create-metricaz.input';
import { UpdateMetricazInput } from './dto/update-metricaz.input';

@Resolver(() => Metricaz)
export class MetricazResolver {
  constructor(private readonly metricazService: MetricazService) {}

  @Mutation(() => Metricaz)
  createMetricaz(@Args('createMetricazInput') createMetricazInput: CreateMetricazInput) {
    return this.metricazService.create(createMetricazInput);
  }

  @Query(() => [Metricaz], { name: 'metricaz' })
  findAll() {
    return this.metricazService.findAll();
  }

  @Query(() => Metricaz, { name: 'metricaz' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.metricazService.findOne(id);
  }

  @Mutation(() => Metricaz)
  updateMetricaz(@Args('updateMetricazInput') updateMetricazInput: UpdateMetricazInput) {
    return this.metricazService.update(updateMetricazInput.id, updateMetricazInput);
  }

  @Mutation(() => Metricaz)
  removeMetricaz(@Args('id', { type: () => Int }) id: number) {
    return this.metricazService.remove(id);
  }
}
