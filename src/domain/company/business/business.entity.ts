import { Entity } from '@/core/entities/entity';
import { BusinessProps } from './types/busines';
import { UniqueID } from '@/core/value-objects/unique-id';
import { Either, left, right } from '@/core/errors/either';
import { Rule, validate } from '@/shared/utils/guard';
import { ValidationError } from '@/core/errors/validation-error';

export class Business extends Entity<BusinessProps> {
  private constructor(props: BusinessProps, id?: UniqueID) {
    super(props, id);
  }

  static create(props: BusinessProps, id?: UniqueID): Either<ValidationError, Business> {
    const rules: Partial<Record<keyof BusinessProps, Rule<BusinessProps>>> = {
      cnpj: {
        message: 'O CNPJ é obrigatório.',
        required: true,
      },
      doingBusinessAs: {
        message: 'O nome fantasia é necessário.',
        required: true,
      },
    };

    const result = validate(props, rules, 'business');

    if (result.isLeft()) {
      return left(result.value);
    }

    const business = new Business(
      {
        ...props,
      },
      id,
    );

    return right(business);
  }

  get cnpj() {
    return this.props.cnpj;
  }
  get doingBusinessAs() {
    return this.props.doingBusinessAs;
  }
  get website() {
    return this.props.website;
  }
  get email() {
    return this.props.email;
  }

  updateWebsite(url: string) {
    this.props.website = url;
  }
  updateEmail(email: string) {
    this.props.email = email;
  }
}
