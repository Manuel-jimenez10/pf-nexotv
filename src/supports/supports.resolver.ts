import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SupportsService } from './supports.service';
import { Support } from './entities/support.entity';
import { CreateSupportInput } from './dto/create-support.input';
import { UpdateSupportInput } from './dto/update-support.input';

@Resolver(() => Support)
export class SupportsResolver {
  constructor(private readonly supportsService: SupportsService) {}

  @Mutation(() => Support)
  createSupport(@Args('createSupportInput') createSupportInput: CreateSupportInput) {
    return this.supportsService.create(createSupportInput);
  }

  @Query(() => [Support], { name: 'supports' })
  findAll() {
    return this.supportsService.findAll();
  }

  @Query(() => Support, { name: 'support' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.supportsService.findOne(id);
  }

  @Mutation(() => Support)
  updateSupport(@Args('updateSupportInput') updateSupportInput: UpdateSupportInput) {
    return this.supportsService.update(updateSupportInput.id, updateSupportInput);
  }

  @Mutation(() => Support)
  removeSupport(@Args('id', { type: () => Int }) id: number) {
    return this.supportsService.remove(id);
  }
}
