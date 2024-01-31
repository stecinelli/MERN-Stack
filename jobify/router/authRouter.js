import { Router } from 'express';
const router = Router();

import { register, login } from '../controllers/authControler.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validation.js';

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);

export default router;
