import { Router } from 'express';
import products from '../controllers/productsController';
import users from '../controllers/usersController';

const router = Router();
router
  .get('/products', products.getAll)
  .post('/products', products.createProduct)
  .post('/users', users.createUser);

export default router;
