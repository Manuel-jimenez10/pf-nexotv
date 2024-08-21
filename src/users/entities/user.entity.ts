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
  //@Field(() => String)
  password: string;

  @Column('text', { nullable: false })
  @Field(() => String)
  firstName: string;

  @Column('text', { nullable: false })
  @Field(() => String)
  lastName: string;

  @Column('text', { array: true, default: ['basic'] })
  @Field(() => [String])
  subscription: string[];

  @Field(() => [String], { nullable: true })
  views?: string[];

  @Field(() => [String], { nullable: true })
  favorites?: string[];

  @Column('text', { array: true, default: ['user'] })
  @Field(() => [String])
  roles: string[];

  @Column('bool', { default: true })
  @Field(() => Boolean)
  isActive: boolean;
}
