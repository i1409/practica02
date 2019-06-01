export interface Datos{
  posts: Array<Estructura>
}
export interface Estructura {
  id?: number,
  nombre?: string,
  usuario?: string,
  telefono?: string,
  direccion?: string
}
