import { BcryptPasswordProvider } from '@/infra/cryptography/bcrypt-password';
import { InMemoryUserRepository } from '@/infra/database/in-memory/in-memory-user.repository';
import { CreateUserService } from '@/services/identity/user/create-user';
import { personContainer } from '../person/container';

const userRepo = new InMemoryUserRepository();
const passwordProvider = new BcryptPasswordProvider();

export const userContainer = {
  userRepo,
  createUserService: new CreateUserService(userRepo, personContainer.personRepo, passwordProvider),
};
