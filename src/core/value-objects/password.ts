import { Either } from '../errors/either';
import { ValidationError } from '../errors/validation-error';

export abstract class Password {
  abstract compare(plain: string): Promise<boolean>;
  abstract value(): string;
}

export abstract class PasswordProvider {
  abstract create(plain: string): Promise<Either<ValidationError, Password>>;
  abstract fromHashed(hashed: string): Promise<Password>;
}
