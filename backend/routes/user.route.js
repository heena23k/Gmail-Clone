import express from 'express';
import { register, login, logout } from '../controllers/user.controller.js';

const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
