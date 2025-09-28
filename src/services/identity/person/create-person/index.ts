import { Person } from '@/domain/identity/person/person.entity';
import { PersonRepository } from '@/domain/identity/person/repositories/person.repository';
import { CreatePersonDTO } from './dto';
import { Address } from '@/core/value-objects/address';
import { Either, left, right } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';

type CreatePersonResponse = Either<
  ValidationError,
  {
    person: Person;
  }
>;

export class CreatePersonService {
  constructor(private personRepo: PersonRepository) {}

  async execute(props: CreatePersonDTO): Promise<CreatePersonResponse> {
    let addressVO;

    if (props.address) {
      const result = Address.create(props.address);
      if (result.isLeft()) {
        return left(result.value);
      }
      addressVO = result.value;
    }

    const person = Person.create({ ...props, address: addressVO });

    if (person.isLeft()) {
      return left(person.value);
    }

    await this.personRepo.save(person.value);

    return right({ person: person.value });
  }
}
