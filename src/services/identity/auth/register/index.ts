// src/services/identity/auth/register/index.ts
import { container } from '@/containers/container';
import { RegisterDTO } from './dto';
import { Either, left, right } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';

export async function register(
  dto: RegisterDTO,
): Promise<Either<ValidationError, { membershipId: string }>> {
  const personRes = await container.identity.person.createPersonService.execute({
    name: dto.personName,
    surname: dto.personSurname,
    phone: dto.phone,
  });

  if (personRes.isLeft()) {
    return left(personRes.value);
  }
  const person = personRes.value.person;

  const companyRes = await container.company.business.createBusinessService.execute({
    doing_business_as: dto.companyName,
    cnpj: dto.cnpj,
  });
  if (companyRes.isLeft()) {
    return left(companyRes.value);
  }
  const company = companyRes.value.business;

  const userRes = await container.identity.user.createUserService.execute({
    email: dto.email,
    password: dto.password,
    personId: person.id.toString(),
  });
  if (userRes.isLeft()) {
    return left(userRes.value);
  }
  const user = userRes.value.user;

  const roleRes = await container.company.role.createRoleService.execute({
    businessId: company.id.toString(),
    name: 'Default',
    isDefault: true,
  });
  if (roleRes.isLeft()) {
    return left(new ValidationError({ roleRes: roleRes.value.message }, 'roles'));
  }
  const role = roleRes.value.role;

  const membershipRes = await container.company.membership.createMembershipService.execute({
    userId: user.id.toString(),
    businessId: company.id.toString(),
    roleIds: [role.id.toString()],
    permissions: [],
    deniedPermissions: [],
  });
  if (membershipRes.isLeft()) {
    return left(membershipRes.value);
  }

  return right({ membershipId: membershipRes.value.membership.id.toString() });
}
