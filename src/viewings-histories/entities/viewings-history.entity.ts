import { Contenido } from 'src/contenidos/entities/contenido.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ViewingsHistory {
 @PrimaryGeneratedColumn('uuid')
 id: string;

@ManyToOne(() => User, (user) => user.viewingHistory)
user: User;

@ManyToOne(() => Contenido, contenido => contenido.viewingHistories)
@JoinColumn({ name: 'contenido_id' })
contenido: Contenido;

@Column({
  type: 'date'
})
fecha_visualizacion: Date;
}
