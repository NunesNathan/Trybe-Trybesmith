import { Request, Response, NextFunction } from 'express';
import { IErrorMiddleware } from '../../interfaces/store.interface';
import IErrorHttp from './errorHttp';

export default class ErrorMiddleware implements IErrorMiddleware {
  public errorTreatment = async (
    { status, message }: IErrorHttp,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> => {
    if (!status) return res.status(500).json({ message });

    return res.status(status).json({ message });
  };
}
