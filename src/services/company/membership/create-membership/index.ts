import { BusinessRepository } from '@/domain/company/business/repositories/business.repository';
import { MembershipRepository } from '@/domain/company/membership/repositories/membership.repository';
import { RolesRepository } from '@/domain/company/role/repositories/role.repository';
import { UserRepository } from '@/domain/identity/user/repositories/user.repository';
import { CreateMembershipDTO } from './dto';
import { Either, left, right } from '@/core/errors/either';
import { ValidationError } from '@/core/errors/validation-error';
import { UniqueID } from '@/core/value-objects/unique-id';
import { Membership } from '@/domain/company/membership/membership.entity';
import { Role } from '@/domain/company/role/role.entity';

export class CreateMembershipService {
  constructor(
    private readonly membershipRepo: MembershipRepository,
    private readonly userRepo: UserRepository,
    private readonly businessRepo: BusinessRepository,
    private readonly roleRepo: RolesRepository,
  ) {}

  async execute({
    userId,
    businessId,
    roleIds = [],
    permissions = [],
    deniedPermissions = [],
    status = 'active',
  }: CreateMembershipDTO): Promise<Either<ValidationError, { membership: Membership }>> {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      return left(new ValidationError({ userId: 'Usuário não encontrado' }, 'membership'));
    }

    const business = await this.businessRepo.findById(businessId);
    if (!business) {
      return left(new ValidationError({ businessId: 'Empresa não encontrada' }, 'membership'));
    }

    const userVO = new UniqueID(userId);
    const businessVO = new UniqueID(businessId);

    const roles = (await Promise.all(roleIds.map((id) => this.roleRepo.findById(id)))).filter(
      (r): r is Role => r !== null,
    );

    const membership = Membership.createWithRoles(
      userVO,
      businessVO,
      roles,
      permissions,
      deniedPermissions,
      status,
    );

    await this.membershipRepo.save(membership);

    return right({ membership });
  }
}
