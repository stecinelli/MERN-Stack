import { Router } from 'express';
const router = Router();

import { register, login, logout } from '../controllers/authControler.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validation.js';

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logout);

export default router;
