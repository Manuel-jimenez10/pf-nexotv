import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ViewingsHistoriesService } from './viewings-histories.service';
import { ViewingsHistory } from './entities/viewings-history.entity';
import { CreateViewingsHistoryInput } from './dto/create-viewings-history.input';
import { UpdateViewingsHistoryInput } from './dto/update-viewings-history.input';

@Resolver(() => ViewingsHistory)
export class ViewingsHistoriesResolver {
  constructor(private readonly viewingsHistoriesService: ViewingsHistoriesService) {}

  @Mutation(() => ViewingsHistory)
  createViewingsHistory(@Args('createViewingsHistoryInput') createViewingsHistoryInput: CreateViewingsHistoryInput) {
    return this.viewingsHistoriesService.create(createViewingsHistoryInput);
  }

  @Query(() => [ViewingsHistory], { name: 'viewingsHistories' })
  findAll() {
    return this.viewingsHistoriesService.findAll();
  }

  @Query(() => ViewingsHistory, { name: 'viewingsHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.viewingsHistoriesService.findOne(id);
  }

  @Mutation(() => ViewingsHistory)
  updateViewingsHistory(@Args('updateViewingsHistoryInput') updateViewingsHistoryInput: UpdateViewingsHistoryInput) {
    return this.viewingsHistoriesService.update(updateViewingsHistoryInput.id, updateViewingsHistoryInput);
  }

  @Mutation(() => ViewingsHistory)
  removeViewingsHistory(@Args('id', { type: () => Int }) id: number) {
    return this.viewingsHistoriesService.remove(id);
  }
}
