import { NextFunction, Request, Response } from 'express';
import IErrorHttp from '../middlewares/error/errorHttp';

// To use (Body schemas)
export interface IProduct {
  id: number;
  name: string;
  amount: string;
  orderId?: null | number;
}

export interface IProductToCreate {
  name: string;
  amount: string;
}

export interface IUser {
  id: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUserToCreate {
  username: string;
  classe: string;
  level: number;
  password: string;
}

// Model schemas
export interface IProductsModel {
  getAll(): Promise<IProduct[]>;
  create(productToCreate: IProductToCreate): Promise<IProduct>;
}

export interface IUsersModel {
  // getOne(user: IUserToCreate): Promise<IUser>;
  create(userToCreate: IUserToCreate): Promise<IUser>;
}

// Controller schemas
export interface IProductsController {
  getAll(_req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
}

export interface IUsersController {
  create(req: Request, res: Response): Promise<Response>;
}

// Service schemas
export interface IProductsService {
  getAll(): Promise<IProduct[]>;
  create(newProduct: IProductToCreate): Promise<IProduct>;
}

export interface IUsersService {
  create(newUser: IUserToCreate): Promise<void>;
}

// Middleware schemas
export interface IProductsMiddleware {
  create(req: Request, _res: Response, next: NextFunction): void;
}

export interface IErrorMiddleware {
  errorTreatment(err: IErrorHttp, _req: Request,
    res: Response, _next: NextFunction): Promise<Response>;
}

export interface IUsersMiddleware {
  create(req: Request, _res: Response, next: NextFunction): void;
}

export interface IJwtFuncs {
  signUser(user: IUserToCreate): string;
}
