import { Router } from 'express';
import { domicilioController } from '../../infrastructure/dependencies/container.dependency';

export class DomicilioRoutes {
  static get routes(): Router {
    const router = Router();

    router.get('/usuarioId/:usuarioId', domicilioController.getDomicilioByUsuarioId);

    return router;
  }
}