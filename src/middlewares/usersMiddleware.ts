import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { IUsersMiddleware } from '../interfaces/store.interface';
import IErrorHttp from './error/errorHttp';

export default class UsersMiddleware implements IUsersMiddleware {
  private createSchema: Joi.ObjectSchema;

  constructor() {
    this.createSchema = Joi.object({
      username: Joi.string().min(3).required(),
      classe: Joi.string().min(3).required(),
      level: Joi.number().min(1).required(),
      password: Joi.string().min(8).required(),
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
