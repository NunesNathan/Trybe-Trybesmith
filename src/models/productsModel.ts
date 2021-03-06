import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct, IProductsModel, IProductToCreate } from '../interfaces/store.interface';

export default class ProductModel implements IProductsModel {
  constructor(private database = connection) { }

  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await this.database.execute(
      'SELECT * FROM `Trybesmith`.`Products`',
    );

    return products as IProduct[];
  };

  public create = async ({ name, amount }: IProductToCreate): Promise<IProduct> => {
    const [{ insertId }] = await this.database.execute<ResultSetHeader>(
      'INSERT INTO `Trybesmith`.`Products` (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return ({ id: insertId, name, amount }) as IProduct;
  };

  public getByOrderId = async (orderId: number): Promise<number> => {
    const result = await this.database.execute<RowDataPacket[]>(
      'SELECT id FROM `Trybesmith`.`Products` WHERE `orderId` = ?',
      [orderId],
    );

    return result[0][0].id as number;
  };
}
