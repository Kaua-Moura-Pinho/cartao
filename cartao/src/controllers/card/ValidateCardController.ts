import { Request, Response } from 'express';
import { ValidateCardService } from '../../services/card/ValidateCardService';

class ValidateCardController {
    async handle(req: Request, res: Response) {
        const { numero } = req.body;
        const usuarioId = req.user_id;

        const validateCardService = new ValidateCardService();
        const isValid = await validateCardService.execute({ numero, usuarioId });

        return res.json({ isValid });
    }
}

export { ValidateCardController };
