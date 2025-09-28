import { CreateRoleDTO } from './dto';
import { BusinessRepository } from '@/domain/company/business/repositories/business.repository';
import { RolesRepository } from '@/domain/company/role/repositories/role.repository';
import { Role } from '@/domain/company/role/role.entity';
import { UniqueID } from '@/core/value-objects/unique-id';
import { Slug } from '@/core/value-objects/slug';
import { Either, left, right } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';

const permissionsDefault = ['session:create'];

type CreateRoleResponse = Either<ValidationError, { role: Role }>;

export class CreateRoleService {
  constructor(
    private readonly roleRepository: RolesRepository,
    private readonly businessRepo: BusinessRepository,
  ) {}

  async execute({
    businessId,
    name,
    permissions = permissionsDefault,
    description,
    isDefault = false,
  }: CreateRoleDTO): Promise<CreateRoleResponse> {
    const business = await this.businessRepo.findById(businessId);
    if (!business) {
      return left(new ValidationError({ businessId: 'Empresa não encontrada' }, 'business'));
    }

    const slug = Slug.create(name);
    const existingRoles = await this.roleRepository.findByBusinessId(businessId);

    const roleWithSameSlug = existingRoles.find((r) => r.matchesSlug(slug));
    if (roleWithSameSlug) {
      return left(new ValidationError({ roleName: 'Já existe um role com esse nome' }, 'role'));
    }

    if (isDefault) {
      const currentDefault = existingRoles.find((r) => r.isDefault);
      if (currentDefault) {
        currentDefault.unsetDefault();
        await this.roleRepository.save(currentDefault);
      }
    }

    const role = Role.create({
      name,
      description,
      businessId: new UniqueID(businessId),
      permissions,
      isDefault,
    });

    await this.roleRepository.save(role);

    return right({ role });
  }
}
