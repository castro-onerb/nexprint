import { userContainer } from '@/containers/identity/user/container';
import { InMemoryMembershipRepository } from '@/infra/database/in-memory/in-memory-membership.repository';
import { CreateMembershipService } from '@/services/company/membership/create-membership';
import { businessContainer } from '../business/container';
import { roleContainer } from '../role/container';

const membershipRepo = new InMemoryMembershipRepository();

export const membershipContainer = {
  membershipRepo,
  createMembershipService: new CreateMembershipService(
    membershipRepo,
    userContainer.userRepo,
    businessContainer.businessRepo,
    roleContainer.roleRepo,
  ),
};
