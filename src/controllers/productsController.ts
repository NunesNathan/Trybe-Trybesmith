import { Request, Response } from 'express';
import ProductsService from '../services/productsService';
import { IProductsController } from '../interfaces/store.interface';
import ProductsMiddleware from '../middlewares/productsMiddleware';

class ProductsController implements IProductsController {
  constructor(private service = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();

    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const product = await this.service.create(req.body);

    return res.status(201).json(product);
  };
}

const product = new ProductsController();
const verifyBodyOn = new ProductsMiddleware();

const productsController = {
  getAll: product.getAll,
  createProduct: [
    verifyBodyOn.create,
    product.create,
  ],
};

export default productsController;
