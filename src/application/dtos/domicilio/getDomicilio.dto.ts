import { type Domicilio } from '../../../domain/entities/domicilio.entity';
import { type Localidad } from '../../../domain/entities/localidad.entity';

export class GetDomicilioDto {
  private constructor(
    public calle: string,
    public numero: number,
    public localidad: Localidad,
    public piso?: number | null,
    public depto?: string | null,
    public descripcion?: string | null
  ) {}

  public static create(domicilio: Domicilio): GetDomicilioDto {
    return new GetDomicilioDto(
      domicilio.getCalle(),
      domicilio.getNumero(),
      domicilio.getLocalidad(),
      domicilio.getPiso(),
      domicilio.getDepto(),
      domicilio.getDescripcion()
    );
  }
}