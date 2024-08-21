import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput } from './dto/inputs';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.usersRepository.create(createUserInput);
    return await this.usersRepository.save(newUser);
  }

  async findAll() {
    return await this.usersRepository.find();
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
    const { isActive, ...rest } = user;
    const disabledUser = {
      rest,
      isActive: !isActive,
    };
    user.isActive = false;
    const updateUser = await this.usersRepository.preload({
      id,
      ...disabledUser,
    });
    await this.usersRepository.save(updateUser);

    return `This action removes a #${id} user`;
  }
}
