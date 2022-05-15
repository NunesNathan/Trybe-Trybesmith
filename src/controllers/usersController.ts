import { Request, Response } from 'express';
import { IUsersController } from '../interfaces/store.interface';
import JwtAuth from '../middlewares/auth/jwtAuth';
import UsersMiddleware from '../middlewares/usersMiddleware';
import UsersService from '../services/usersService';

class UsersController implements IUsersController {
  constructor(private service = new UsersService(), private jwt = new JwtAuth()) { }
  
  public create = async (req: Request, res: Response): Promise<Response> => {
    const token = await this.service.create(req.body)
      .then(() => this.jwt.signUser(req.body));
    return res.status(201).json({ token });
  };
}

const user = new UsersController();
const verifyBodyOn = new UsersMiddleware();

const usersController = {
  createUser: [
    verifyBodyOn.create,
    user.create,
  ],
};

export default usersController;
