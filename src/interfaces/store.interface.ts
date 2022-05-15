import { NextFunction, Request, Response } from 'express';
import IErrorHttp from '../middlewares/error/errorHttp';

// To use (Body schemas)
export interface IProduct {
  id: number,
  name: string,
  amount: string,
  orderId?: null | number
}

export interface IProductToCreate {
  name: string,
  amount: string,
}

// Model schemas
export interface IProductsModel {
  getAll(): Promise<IProduct[]>;
  create({ name, amount }: IProductToCreate): Promise<IProduct>;
}

// Controller schemas
export interface IProductsController {
  getAll(_req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
}

// Service schemas
export interface IProductsService {
  getAll(): Promise<IProduct[]>;
  create(newProduct: IProductToCreate): Promise<IProduct>;
}

// Middleware schemas
export interface IVerifyBody {
  create(req: Request, _res: Response, next: NextFunction): void;
}

export interface IErrorMiddleware {
  errorTreatment(err: IErrorHttp, _req: Request,
    res: Response, _next: NextFunction): Promise<Response>;
}
