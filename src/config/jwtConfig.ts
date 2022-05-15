import dotenv from 'dotenv';
import { Secret, SignOptions } from 'jsonwebtoken';

dotenv.config();

export default {
  secret: <Secret> process.env.JWT_SECRET || 'JWT_SECRET',
  options: <SignOptions> {
    algorithm: 'HS256',
    expiresIn: '15m',
  },
};
