import { Request, Response } from "express";
import { CreateCardService } from "../../services/card/CreateCardService";

class CreateCardController{
    async handle(req: Request, res: Response){
        const { numero, nomeUsuario, validade, cvv} = req.body;
        const usuarioId = req.user_id;

        const createCardService = new CreateCardService();
        const card = await createCardService.execute({numero, nomeUsuario, validade, cvv, usuarioId});

        return res.json(card);
    }
}

export {CreateCardController};