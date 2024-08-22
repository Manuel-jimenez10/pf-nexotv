import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput, UpdateUserInput } from './dto/inputs';
import { PaginationArgs } from './dto/args/pagination.args';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  async findAll(
    @Args('paginationArgs') paginationArgs: PaginationArgs,
  ): Promise<User[]> {
    return await this.usersService.findAll(paginationArgs);
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => String)
  async removeUser(
    @Args('id', { type: () => String }) id: string,
  ): Promise<string> {
    return await this.usersService.remove(id);
  }
}
