import { Entity } from '@/core/entities/entity';
import { UniqueID } from '@/core/value-objects/unique-id';
import { PersonProps } from './types/person';
import { Rule, validate } from '@/shared/utils/guard';
import { Either, left, right } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';

export class Person extends Entity<PersonProps> {
  private constructor(props: PersonProps, id?: UniqueID) {
    super(props, id);
  }

  static create(props: PersonProps, id?: UniqueID): Either<ValidationError, Person> {
    const rules: Partial<Record<keyof PersonProps, Rule<PersonProps>>> = {
      phone: {
        message: 'É necessário informar um número de telefone válido',
        regex: /^[0-9]{11}$/,
        required: true,
      },
      cpf: {
        message: 'CPF inválido',
        regex: /^[0-9]{11}$/,
        required: false,
      },
    };

    const result = validate(props, rules, 'person');

    if (result.isLeft()) {
      return left(result.value);
    }

    const person = new Person(
      {
        ...props,
      },
      id,
    );

    return right(person);
  }

  get name() {
    return this.props.name;
  }
  get cpf() {
    return this.props.cpf;
  }
}
