import { Request, Response } from 'express';

// To use (Body schemas)
export interface IProduct {
  id: number,
  name: string,
  amount: string,
  orderId: null | number
}

// Model schemas
export interface IProductsModel {
  getAll(): Promise<IProduct[]>;
}

// Controller schemas
export interface IProductsController {
  getAll(_req: Request, res: Response): Promise<Response>;
}

// Serivice schemas
export interface IProductsService {
  getAll(): Promise<IProduct[]>;
}
