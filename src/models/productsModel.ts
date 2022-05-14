import connection from '../database/connection';
import { IProduct, IProductsModel } from '../interfaces/store.interface';

export default class ProductModel implements IProductsModel {
  constructor(private database = connection) { }

  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await this.database.execute(
      'SELECT * FROM `Trybesmith`.`Products`',
    );

    return products as IProduct[];
  };
}
