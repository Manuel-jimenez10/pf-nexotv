import { Support } from "src/supports/entities/support.entity";
import { Suscription } from "src/suscriptions/entities/suscription.entity";
import { ViewingsHistory } from "src/viewings-histories/entities/viewings-history.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

enum Roles {
  Admin = 'admin',
  Usuario = 'usuario',
  SuperAdmin = 'superAdmin'
}

@Entity({
  name: 'USER'
})
export class User {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column({
  type: 'varchar',
  length: 50,
  nullable: false
})
name: string;

@Column({
  type: 'varchar',
  length: 100, 
  nullable: false,
})
email: string;

@ManyToOne(() => Suscription, (subscription) => subscription.users, {
  eager: true,
})
subscription: Suscription;


@OneToMany(() => ViewingsHistory, (history) => history.user)
viewingHistory: ViewingsHistory;

@Column({
  type: 'varchar', 
  array: true,     
  nullable: true,
})
favorites: number[];

@Column({
  type: 'enum',
  enum: Roles,

})
rol: Roles

@OneToMany(()=> Support, (support) => support.user)
support: Support;


}
