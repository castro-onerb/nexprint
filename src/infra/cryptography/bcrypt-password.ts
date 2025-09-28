import bcrypt from 'bcryptjs';
import { Either, left, right } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';
import { Password, PasswordProvider } from '@/core/value-objects/password';
import { validate } from '@/shared/utils/guard';

class BcryptPassword implements Password {
  constructor(private readonly hashed: string) {}

  async compare(plain: string): Promise<boolean> {
    return bcrypt.compare(plain, this.hashed);
  }

  value(): string {
    return this.hashed;
  }
}

export class BcryptPasswordProvider implements PasswordProvider {
  async create(plain: string): Promise<Either<ValidationError, Password>> {
    const rules = {
      password: {
        required: true,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        message:
          'A senha deve ter no mínimo 6 caracteres, incluindo maiúsculas, minúsculas, número e símbolo.',
      },
    };

    const result = validate({ password: plain }, rules, 'password');
    if (result.isLeft()) {
      return left(result.value);
    }

    const hashed = await bcrypt.hash(plain, 10);
    return right(new BcryptPassword(hashed));
  }

  async fromHashed(hashed: string): Promise<Password> {
    return new BcryptPassword(hashed);
  }
}
