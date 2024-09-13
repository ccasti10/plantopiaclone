export class VerProductosDto{
  public idProducto: number;
  public nombreProducto: string;
  public imagenProducto: string[];
  public precioProducto: number; 
  public descuento?: number;
  public precioNormal: number;
  public coberturaDeDespacho: string[];
  public stock: number;
  public descripcionProducto: string;
  public  idCategoria: number;
  public valoracion: number;
  public  cantidadVentas: number;
  public  codigoProducto: string; 
}