import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SupportService } from './support.service';
import { Support } from './entities/support.entity';
import { CreateSupportInput } from './dto/create-support.input';
import { UpdateSupportInput } from './dto/update-support.input';

@Resolver(() => Support)
export class SupportResolver {
  constructor(private readonly supportService: SupportService) {}

  @Mutation(() => Support)
  createSupport(
    @Args('createSupportInput') createSupportInput: CreateSupportInput,
  ) {
    return this.supportService.create(createSupportInput);
  }

  @Query(() => [Support], { name: 'support' })
  findAll() {
    return this.supportService.findAll();
  }

  @Query(() => Support, { name: 'support' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.supportService.findOne(id);
  }

  @Mutation(() => Support)
  updateSupport(
    @Args('updateSupportInput') updateSupportInput: UpdateSupportInput,
  ) {
    return this.supportService.update(
      updateSupportInput.id,
      updateSupportInput,
    );
  }

  @Mutation(() => Support)
  removeSupport(@Args('id', { type: () => Int }) id: number) {
    return this.supportService.remove(id);
  }
}
