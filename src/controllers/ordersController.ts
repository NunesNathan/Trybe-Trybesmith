import { Request, Response } from 'express';
import { IOrdersController } from '../interfaces/store.interface';
import OrdersService from '../services/ordersService';

class OrdersController implements IOrdersController {
  constructor(private service = new OrdersService()) { }

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const orders = await this.service.getAll();
    return res.status(200).json(orders);
  };
}

const order = new OrdersController();

const ordersController = {
  allOrders: order.getAll,
};

export default ordersController;
