import jwt from 'jsonwebtoken';
import jwtConfig from '../../config/jwtConfig';
import { IJwtFuncs, IUserToCreate } from '../../interfaces/store.interface';

export default class JwtAuth implements IJwtFuncs {
  public signUser = (user: IUserToCreate): string => jwt.sign(
    user,
    jwtConfig.secret,
    jwtConfig.options,
  );
}
