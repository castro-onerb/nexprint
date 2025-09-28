import { BusinessRepository } from '@/domain/company/business/repositories/business.repository';
import { CreateBusinessDTO } from './dto';
import { Either, left, right } from '@/core/errors/either';
import { Business } from '@/domain/company/business/business.entity';
import { ValidationError } from '@/core/errors/validation-error';

type CreateBusinessResponse = Either<ValidationError, { business: Business }>;

export class CreateBusinessService {
  constructor(private readonly businessRepository: BusinessRepository) {}

  async execute({
    cnpj,
    doing_business_as,
    email,
    website,
    type,
  }: CreateBusinessDTO): Promise<CreateBusinessResponse> {
    const businessOrError = Business.create({
      cnpj,
      doingBusinessAs: doing_business_as,
      email,
      website,
      type: type ?? 'matriz',
    });

    if (businessOrError.isLeft()) {
      return left(businessOrError.value);
    }

    const business = businessOrError.value;
    await this.businessRepository.create(business);

    return right({ business });
  }
}
