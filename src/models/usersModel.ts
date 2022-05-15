import { ResultSetHeader } from 'mysql2';
import { IUser, IUsersModel, IUserToCreate } from '../interfaces/store.interface';
import connection from './connection';

export default class UsersModel implements IUsersModel {
  constructor(private database = connection) { }

  // public getOne = async ({ username }: IUserToCreate): Promise<IUser> => {
  //   const [user] = await this.database.execute(
  //     'SELECT `username` FROM  `Trybesmith`.`Users` WHERE `username` = ?',
  //     username,
  //   );

  //   return user;
  // };

  public create = async ({ username, classe, level, password }: IUserToCreate): Promise<IUser> => {
    const [{ insertId }] = await this.database.execute<ResultSetHeader>(
      'INSERT INTO `Trybesmith`.`Users` (username, classe, level, password) VALUES (?, ?, ?,?)',
      [username, classe, level, password],
    );

    return ({ id: insertId, username, classe, level, password });
  };
}
