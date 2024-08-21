import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SuscriptionsService } from './suscriptions.service';
import { Suscription } from './entities/suscription.entity';
import { CreateSuscriptionInput } from './dto/create-suscription.input';
import { UpdateSuscriptionInput } from './dto/update-suscription.input';

@Resolver(() => Suscription)
export class SuscriptionsResolver {
  constructor(private readonly suscriptionsService: SuscriptionsService) {}

  @Mutation(() => Suscription)
  createSuscription(@Args('createSuscriptionInput') createSuscriptionInput: CreateSuscriptionInput) {
    return this.suscriptionsService.create(createSuscriptionInput);
  }

  @Query(() => [Suscription], { name: 'suscriptions' })
  findAll() {
    return this.suscriptionsService.findAll();
  }

  @Query(() => Suscription, { name: 'suscription' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.suscriptionsService.findOne(id);
  }

  @Mutation(() => Suscription)
  updateSuscription(@Args('updateSuscriptionInput') updateSuscriptionInput: UpdateSuscriptionInput) {
    return this.suscriptionsService.update(updateSuscriptionInput.id, updateSuscriptionInput);
  }

  @Mutation(() => Suscription)
  removeSuscription(@Args('id', { type: () => Int }) id: number) {
    return this.suscriptionsService.remove(id);
  }
}
