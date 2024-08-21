import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'SUPPORT'
})
export class Support {
@PrimaryGeneratedColumn('uuid')
id: string;

@ManyToOne(()=> User, (user) => user.support)
@JoinColumn({name: 'user_id'})
user: User;

@Column({
  type: 'date'
})
fecha_solicitud: Date;

@Column({
  type: 'varchar',
  length: 255,
  nullable: false
})
descripcion_problema: string;
}
