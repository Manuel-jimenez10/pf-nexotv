import { registerEnumType } from '@nestjs/graphql';

export enum Tipo {
  CanalTv = 'canal_tv',
  Pelicula = 'pelicula',
}

export enum Estado {
  Activo = 'activo',
  Inactivo = 'inactivo',
  Pendiente = 'pendiente',
}
registerEnumType(Tipo, {
  name: 'Tipo',
});

registerEnumType(Estado, {
  name: 'Estado',
});
