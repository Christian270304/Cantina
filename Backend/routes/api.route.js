import express from 'express';
import { ApiController } from '../controllers/ApiController.js';
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();


try {
  router.get('/productes', authMiddleware, ApiController.getProductes);
router.get('/check', authMiddleware, ApiController.check);
router.get('/getCart', authMiddleware, ApiController.getCart);

router.post('/login', ApiController.login);
router.post('/register', ApiController.register);
router.post('/logout', authMiddleware,  ApiController.logout);
router.post('/addToCart', authMiddleware, ApiController.addToCarrito);
} catch (err) {
  console.error("Error al registrar ruta", err);
}

export default router;