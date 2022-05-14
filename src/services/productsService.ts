import ProductModel from '../models/productsModel';
import { IProduct, IProductsService } from '../interfaces/store.interface';

export default class ProductsService implements IProductsService {
  constructor(private model = new ProductModel()) { }

  public getAll = async (): Promise<IProduct[]> => this.model.getAll();
}
