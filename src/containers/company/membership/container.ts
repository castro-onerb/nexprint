import { InMemoryBusinessRepository } from '@/infra/database/in-memory/in-memory-business.repository';
import { InMemoryMembershipRepository } from '@/infra/database/in-memory/in-memory-membership.repository';
import { InMemoryRoleRepository } from '@/infra/database/in-memory/in-memory-role.repository';
import { InMemoryUserRepository } from '@/infra/database/in-memory/in-memory-user.repository';
import { CreateMembershipService } from '@/services/company/membership/create-membership';

const membershipRepo = new InMemoryMembershipRepository();
const userRepo = new InMemoryUserRepository();
const businessRepo = new InMemoryBusinessRepository();
const roleRepo = new InMemoryRoleRepository();

export const membershipContainer = {
  createMembershipService: new CreateMembershipService(
    membershipRepo,
    userRepo,
    businessRepo,
    roleRepo,
  ),
};
