import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Estado, Tipo } from 'src/enums/content.enum';
import { ViewHistory } from 'src/view-history/entities/view-history.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // Decorador para convertir la clase en un tipo GraphQL
@Entity({
  name: 'content',
})
export class Content {
  @Field(() => ID) // Decorador para el campo ID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field() // Decorador para campos de texto
  @Column({
    type: 'varchar',
    length: 50,
  })
  titulo: string;

  @Field() // Decorador para campos de texto
  @Column({
    type: 'varchar',
    length: 255,
  })
  descripcion: string;

  @Field(() => Tipo, { nullable: true }) // Decorador para enums
  @Column({
    type: 'enum',
    enum: Tipo,
    nullable: true,
  })
  tipo?: Tipo;

  @Field(() => Estado, { nullable: true }) // Decorador para enums
  @Column({
    type: 'enum',
    enum: Estado,
    nullable: true,
  })
  estado?: Estado;

  @Field(() => [ViewHistory], { nullable: true }) // Decorador para relaciones OneToMany
  @OneToMany(() => ViewHistory, (history) => history.contenido)
  viewingHistories: ViewHistory[];
}
