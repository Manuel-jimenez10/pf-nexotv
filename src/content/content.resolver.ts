import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Content } from './entities/content.entity';
import { ContentService } from './content.service';
import { CreateContentInput } from './dto/inputs/create-content.input';
import { UpdateContentInput } from './dto/inputs/update-content.input';

@Resolver(() => Content)
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Mutation(() => Content)
  createContent(
    @Args('createContentInput') createContentInput: CreateContentInput,
  ) {
    return this.contentService.create(createContentInput);
  }

  @Query(() => [Content], { name: 'contentAll' })
  findAll() {
    return this.contentService.findAll();
  }

  @Query(() => Content, { name: 'contentOne' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.contentService.findOne(id);
  }

  @Mutation(() => Content)
  updateContent(
    @Args('updateContentInput') updateContentInput: UpdateContentInput,
  ) {
    return this.contentService.update(
      updateContentInput.id,
      updateContentInput,
    );
  }

  @Mutation(() => Content)
  removeContent(@Args('id', { type: () => Int }) id: string) {
    return this.contentService.remove(id);
  }
}
