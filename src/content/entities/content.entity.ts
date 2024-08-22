import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { ViewHistory } from 'src/view-history/entities/view-history.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

enum Tipo {
  CanalTv = 'canal_tv',
  Pelicula = 'pelicula',
}

enum Estado {
  Activo = 'activo',
  Inactivo = 'inactivo',
  Pendiente = 'pendiente',
}

// Registro de los enums para GraphQL
registerEnumType(Tipo, {
  name: 'Tipo',
});

registerEnumType(Estado, {
  name: 'Estado',
});

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
    nullable: false,
  })
  titulo: string;

  @Field() // Decorador para campos de texto
  @Column({
    type: 'varchar',
    length: 255,
  })
  descripcion: string;

  @Field(() => Tipo) // Decorador para enums
  @Column({
    type: 'enum',
    enum: Tipo,
  })
  tipo: Tipo;

  @Field(() => Estado) // Decorador para enums
  @Column({
    type: 'enum',
    enum: Estado,
  })
  estado: Estado;

  @Field(() => [ViewHistory], { nullable: true }) // Decorador para relaciones OneToMany
  @OneToMany(() => ViewHistory, (history) => history.contenido)
  viewingHistories: ViewHistory[];
}
