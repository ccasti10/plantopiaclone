export interface Usuario {
  idUsuario: number;
  nombreUsuario: string;
  email: string;
  telefono?: string;
  direccion?: string;
  ciudad?: string;
  region?: string;
  codigoPostal?: string;
}

export interface RegistroUsuario {
  nombreUsuario: string;
  email: string;
  password: string;
  telefono?: string;
  direccion?: string;
  ciudad?: string;
  region?: string;
  codigoPostal?: string;
}

export interface LoginUsuario {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  usuario: Usuario;
}
