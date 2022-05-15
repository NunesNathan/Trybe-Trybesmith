import ProductsModel from '../models/productsModel';
import OrdersModel from '../models/ordersModel';
import { IOrdersService, IOrderWithProducts } from '../interfaces/store.interface';

export default class OrdersService implements IOrdersService {
  constructor(private model = new OrdersModel(), private productsModel = new ProductsModel()) { }

  public getAll = async (): Promise<IOrderWithProducts[]> => {
    const orders = await this.model.getAll();

    const ordersWithProducts = orders.map(async ({ id, userId }) => {
      const productsIds = [await this.productsModel.getByOrderId(id)];

      return ({
        id,
        userId,
        productsIds,
      });
    });

    return (await Promise.all(ordersWithProducts)) as IOrderWithProducts[];
  };
}
