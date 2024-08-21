import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput } from './dto/inputs';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { PaginationArgs } from './dto/args/pagination.args';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const { password, ...restData } = createUserInput;
    const newUser = this.usersRepository.create({
      ...restData,
      password: bcrypt.hashSync(password, 10),
    });
    return await this.usersRepository.save(newUser);
  }

  async findAll(paginationArgs: PaginationArgs) {
    const { limit = 10, offset = 0 } = paginationArgs;
    return await this.usersRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`User with id: ${id} not found`);
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.usersRepository.preload({ id, ...updateUserInput });
    if (!user) throw new NotFoundException(`User with id: ${id} not found`);
    return await this.usersRepository.save(user);
  }

  async remove(id: string): Promise<string> {
    const user = await this.findOne(id);
    user.isActive = false;
    const updateUser = await this.usersRepository.preload({
      id,
      ...user,
    });
    await this.usersRepository.save(updateUser);

    return `This action removes a #${id} user`;
  }
}
