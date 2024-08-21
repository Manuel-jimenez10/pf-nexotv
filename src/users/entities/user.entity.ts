import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column('text', { unique: true, nullable: false })
  @Field(() => String)
  email: string;

  @Column('text', { nullable: false })
  @Field(() => String)
  password: string;

  @Column('text', { nullable: false })
  @Field(() => String)
  fullName: string;

  @Column('text', { array: true, default: ['basic'] })
  @Field(() => [String])
  subscription: string[];

  @Column('text', { array: true })
  @Field(() => [String])
  views?: string[];

  @Column('text', { array: true })
  @Field(() => [String])
  favorites?: string[];

  @Column('text', { array: true, default: ['user'] })
  @Field(() => [String])
  rol: string[];
}
