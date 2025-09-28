import { Entity } from '@/core/entities/entity';
import { UniqueID } from '@/core/value-objects/unique-id';
import { Either, right, left } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';
import { validate, Rule } from '@/shared/utils/guard';
import { UserProps } from './types/user';
import { Password } from '@/core/value-objects/password';

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: UniqueID) {
    super(props, id);
  }

  static create(props: UserProps, id?: UniqueID): Either<ValidationError, User> {
    const rules: Partial<Record<keyof UserProps, Rule<UserProps>>> = {
      email: {
        message: 'O e-mail é obrigatório e deve ser válido',
        required: true,
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      password: {
        message: 'Senha inválida',
        validate: (value) => value !== null && value !== undefined,
      },
      personId: {
        message: 'O usuário deve ter uma pessoa associada',
        validate: (value) => value !== null && value !== undefined,
      },
    };

    const result = validate(props, rules, 'user');
    if (result.isLeft()) {
      return left(result.value);
    }

    return right(new User(result.value, id));
  }

  get email() {
    return this.props.email;
  }

  get personId() {
    return this.props.personId;
  }

  get password(): Password {
    return this.props.password;
  }
}
