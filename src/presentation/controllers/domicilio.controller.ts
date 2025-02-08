import { GetDomicilioDto } from '../../application/dtos/domicilio/getDomicilio.dto';
import { DomicilioService } from '../../application/services/domicilio.service';
import { Injectable } from '../../infrastructure/dependencies/injectable.dependency';
import { HandleError } from '../errors/handle.error';
import { type Request, type Response } from 'express';

@Injectable()
export class DomicilioController {
  constructor(
    private readonly domicilioService: DomicilioService
  ) {}

  getDomicilioByUsuarioId = async (req: Request, res: Response) => {
    const { usuarioId } = req.params;

    if (!usuarioId) {
      res.status(400).json({ message: 'Se necesita un ID de usuario' });
      return;
    }

    if (typeof usuarioId !== 'string') {
      res.status(400).json({ message: 'El ID de usuario tiene que ser un string' });
      return;
    }

    try {
      const domicilio = await this.domicilioService.getDomicilioByUsuarioId(usuarioId);
      const domicilioDto = GetDomicilioDto.create(domicilio);
      res.status(200).json(domicilioDto);
    } catch (error) {
      HandleError.throw(error, res);
    }
  };
}