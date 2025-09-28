import { BcryptPasswordProvider } from '@/infra/cryptography/bcrypt-password';
import { InMemoryPersonRepository } from '@/infra/database/in-memory/in-memory-person.repository';
import { InMemoryUserRepository } from '@/infra/database/in-memory/in-memory-user.repository';
import { CreateUserService } from '@/services/identity/user/create-user';

const userRepo = new InMemoryUserRepository();
const personRepo = new InMemoryPersonRepository();
const passwordProvider = new BcryptPasswordProvider();

export const userContainer = {
  createUserService: new CreateUserService(userRepo, personRepo, passwordProvider),
};
