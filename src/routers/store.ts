import { Router } from 'express';
import products from '../controllers/productsController';

const router = Router();

router
  .get('/products', products.getAll)
  .post('/products', products.createProduct);

export default router;
