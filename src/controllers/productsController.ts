import { Request, Response } from 'express';
import ProductsService from '../services/productsService';
import { IProductsController } from '../interfaces/store.interface';

export default class ProductsController implements IProductsController {
  constructor(private service = new ProductsService()) { }
  
  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();

    return res.status(200).json(products);
  };
}
