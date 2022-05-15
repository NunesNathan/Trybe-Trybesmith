import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { IVerifyBody } from '../interfaces/store.interface';
import IErrorHttp from './error/errorHttp';

export default class VerifyBody implements IVerifyBody {
  private createSchema: Joi.ObjectSchema;

  constructor() {
    this.createSchema = Joi.object({
      name: Joi.string().min(3).required(),
      amount: Joi.string().min(3).required(),
    }).required();
  }

  public create = (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = this.createSchema.validate(req.body);

    if (error) {
      const [{ message }] = error.details;

      throw message.includes('must be')
        ? new IErrorHttp(422, message)
        : new IErrorHttp(400, message);
    }

    next();
  };
}
