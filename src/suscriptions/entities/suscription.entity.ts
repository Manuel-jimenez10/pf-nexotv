import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

enum Tipo {
  Premium = 'premium',
  basic = 'basic',
  free = 'free'
}

@Entity({
  name: 'SUSCRIPTION'
})
export class Suscription {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column({
  type: 'enum',
  enum: Tipo
})
tipo: Tipo;

@Column({
  type: 'decimal', 
  precision: 10,   
  scale: 2,        
  nullable: false,
})
price: number;

@OneToMany(() => User, (users) => users.subscription, {
  eager: true,
})
users: User[]
}
