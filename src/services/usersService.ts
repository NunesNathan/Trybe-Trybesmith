import { IUsersService, IUserToCreate } from '../interfaces/store.interface';
import UsersModel from '../models/usersModel';

export default class UsersService implements IUsersService {
  constructor(private model = new UsersModel()) { }

  public create = async (newUser: IUserToCreate): Promise<void> => {
    await this.model.create(newUser);
  };
}
