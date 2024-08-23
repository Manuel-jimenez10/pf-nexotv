import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserInput } from './dto/inputs';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationArgs } from './dto/args/pagination.args';
import * as bcrypt from 'bcrypt';
import { SignupInput } from '../auth/dto/input/signup.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  private logger = new Logger('UsersServices');

  async create(signupInput: SignupInput): Promise<User> {
    const { password, ...restData } = signupInput;

    try {
      const newUser = this.usersRepository.create({
        ...restData,
        password: bcrypt.hashSync(password, 10),
      });
      return await this.usersRepository.save(newUser);
    } catch (error) {
      console.log(error);
      this.handleDbErros(error);
    }
  }

  async findAll(paginationArgs: PaginationArgs): Promise<User[]> {
    const { limit = 10, offset = 0 } = paginationArgs;
    return await this.usersRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOneBy({ id });
      if (!user) throw new NotFoundException(`User with id: ${id} not found`);
      return user;
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async findOneByEmail(email: string): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ email });
    } catch (error) {
      this.handleDbErros(error);
    }
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

  private handleDbErros(error: any): never {
    console.log(error);
    if (error === '23505')
      throw new BadRequestException(`Error: ${error.detail}`);

    this.logger.error(error);

    throw new InternalServerErrorException('Pleace check server logs');
  }
}
