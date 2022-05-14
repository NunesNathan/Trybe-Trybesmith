import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const products = new ProductsController();

const router = Router();

router
  .get('/products', products.getAll);

export default router;
