import ProductModel from '../models/productsModel';
import { IProduct, IProductsService, IProductToCreate } from '../interfaces/store.interface';

export default class ProductsService implements IProductsService {
  constructor(private model = new ProductModel()) { }

  public getAll = async (): Promise<IProduct[]> => this.model.getAll();

  public create = async (newProduct: IProductToCreate): Promise<IProduct> => (
    this.model.create(newProduct)
  );
}
