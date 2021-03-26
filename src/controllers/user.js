import { login } from '../services/auth';

export function loginUser(email, password) {
  return login(email, password);
}