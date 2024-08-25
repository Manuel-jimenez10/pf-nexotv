import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsEmpty, isEmpty, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Estado, Tipo } from 'src/enums/content.enum';

@InputType()
export class CreateContentInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @Field(() => [String])
  @IsArray()
  movies: string[];

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @Field(() => Tipo)
  @IsEnum(Tipo)
  tipo: Tipo

  @Field(() => Estado)
  @IsEnum(Estado)
  estado: Estado;
}
