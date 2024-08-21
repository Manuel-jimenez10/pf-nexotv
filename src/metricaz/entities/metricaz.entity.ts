import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'METRICAZ'
})
export class Metricaz {

  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column({
    type: 'int'
  })
  cantidad_usuarios_registrados: number;

  @Column({
    type: 'int'
  })
  cantidad_usuarios_premium: number;

  @Column({
    type: 'int'
  })
  cantidad_usuarios_free: number;
}
