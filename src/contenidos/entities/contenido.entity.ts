import { ViewingsHistory } from "src/viewings-histories/entities/viewings-history.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

enum Tipo {
   CanalTv = 'canal_tv',
   Pelicula = 'pelicula'
}

enum Estado {
    Activo = 'activo',
    Inactivo = 'inactivo',
    Pendiente = 'pendiente',
  }


@Entity({
    name: "CONTENIDO",
})

export class Contenido {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    titulo: string;

    @Column({
        type: "varchar",
        length: 255
    })
    descripcion: string;


    @Column({
        type: 'enum',
        enum: Tipo
    })
    tipo: Tipo;

    @Column({
        type: 'enum',
        enum: Estado
    })
    estado: Estado;

    @OneToMany(() => ViewingsHistory, history => history.contenido)
    viewingHistories: ViewingsHistory[];
}

