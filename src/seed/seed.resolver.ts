import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeedService } from './seed.service';
import { Seed } from './entities/seed.entity';


@Resolver(() => Seed)
export class SeedResolver {
  constructor(private readonly seedService: SeedService) {}
  @Mutation(()=> Boolean)
  async excuteSeed (): Promise<boolean> {
    return this.seedService.loadMovies();
  }
  
  @Mutation(() => String)
  async preloadMovies(): Promise<string> {
    return this.seedService.preloadMovies();
  }

}
