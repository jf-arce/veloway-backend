import { Router } from 'express';
import { apiKeyMiddleware, fichaMedicaController } from '../../infrastructure/dependencies/container.dependency';

export class FichasMedicasRoutes {
  static get routes(): Router {
    const router = Router();

    router.get('/', fichaMedicaController.getAll);
    router.get('/:conductorID', fichaMedicaController.getFichaMedicaByConductorId);
    router.get('/compartida/telefono/:telefono', apiKeyMiddleware.apiKeyVerificator, fichaMedicaController.getFichaMedicaCompartidaByTelefono);
    router.get('/fichaMedica/:fichaMedicaID', fichaMedicaController.getFichaMedica);
    router.post('/create', fichaMedicaController.create);
    router.put('/update/:fichaMedicaID', fichaMedicaController.update);

    return router;
  }
}