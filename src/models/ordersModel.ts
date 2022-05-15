// import { RowDataPacket } from 'mysql2';
import { IOrder, IOrderModel } from '../interfaces/store.interface';
import connection from './connection';

export default class OrdersModel implements IOrderModel {
  constructor(private database = connection) { }

  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await this.database.execute(
      'SELECT * FROM `Trybesmith`.`Orders`',
    );

    return orders as IOrder[];
  };

  // // sugestão de uso do generic https://trybecourse.slack.com/archives/C02A8CKT31U/p1652310051229249
  // public getOne = async (id: number): Promise<IOrder> => {
  //   const result = await this.database.execute<RowDataPacket[]>(
  //     'SELECT * FROM `Trybesmith`.`Orders` WHERE id = ?',
  //     [id],
  //   );

  //   return result[0][0] as IOrder;
  // };
}
