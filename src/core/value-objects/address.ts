import { validate, Rule } from '@/shared/utils/guard';
import { Either, right, left } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';
import { AddressProps } from '../types/address';

export class Address {
  private props: AddressProps;

  private constructor(props: AddressProps) {
    this.props = props;
  }

  static create(props: AddressProps): Either<ValidationError, Address> {
    const rules: Partial<Record<keyof AddressProps, Rule<AddressProps>>> = {
      street: { required: true, message: 'O nome da rua é obrigatório' },
      city: { required: true, message: 'É necessário informar a cidade' },
      state: { required: true, message: 'O estado é obrigatório' },
      zipCode: {
        required: true,
        regex: /^[0-9]{8}$/,
        message: 'O CEP é obrigatório e deve estar no formato 00000-000',
      },
    };

    const result = validate(props, rules, 'address');

    if (result.isLeft()) {
      return left(result.value);
    }

    return right(new Address(result.value));
  }

  get value(): AddressProps {
    return this.props;
  }
}
