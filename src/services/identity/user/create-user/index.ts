import { Either, left, right } from '@/core/errors/either';
import { PersonRepository } from '@/domain/identity/person/repositories/person.repository';
import { UserRepository } from '@/domain/identity/user/repositories/user.repository';
import { User } from '@/domain/identity/user/user.entity';
import { CreateUserDTO } from './dto';
import { ValidationError } from '@/core/errors/validation-error';
import { UniqueID } from '@/core/value-objects/unique-id';
import { PasswordProvider, Password } from '@/core/value-objects/password';

type CreateUserResponse = Either<
  ValidationError,
  {
    user: User;
  }
>;

export class CreateUserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly personRepo: PersonRepository,
    private readonly passwordProvider: PasswordProvider,
  ) {}

  async execute({
    email,
    password: plainPassword,
    personId,
  }: CreateUserDTO): Promise<CreateUserResponse> {
    const person = await this.personRepo.findById(personId);
    if (!person) {
      return left(
        new ValidationError(
          { personId: 'Não localizamos a pessoa informada para vincular como usuário' },
          'user',
        ),
      );
    }

    const passwordOrError = await this.passwordProvider.create(plainPassword);
    if (passwordOrError.isLeft()) {
      return left(passwordOrError.value);
    }
    const passwordVO: Password = passwordOrError.value;

    const userOrError = User.create({
      email,
      personId: new UniqueID(personId),
      password: passwordVO,
    });
    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }
    const user = userOrError.value;

    const existing = await this.userRepo.findByEmail(email);
    if (existing) {
      return left(new ValidationError({ email: 'Já existe um usuário com esse e-mail.' }, 'user'));
    }

    await this.userRepo.save(user);
    return right({ user });
  }
}
