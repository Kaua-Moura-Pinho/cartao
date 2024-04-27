import {Router} from 'express';

/* área de importação dos controllers */

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/authUserControler';
import { isAuthenticated } from './middlewares/isAuthenticade';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCardController } from './controllers/card/CreateCardController';
import { ValidateCardController } from './controllers/card/ValidateCardController';

const router = Router();

//------- Rotas para user -------//
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/card', new CreateCardController().handle)
router.get('/validate', isAuthenticated, new ValidateCardController().handle)

router.get('/userinfo', isAuthenticated, new DetailUserController().handle)

export{router};