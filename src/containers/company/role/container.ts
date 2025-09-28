import { InMemoryRoleRepository } from '@/infra/database/in-memory/in-memory-role.repository';
import { CreateRoleService } from '@/services/company/role/create-role';
import { businessContainer } from '../business/container';

const roleRepo = new InMemoryRoleRepository();

export const roleContainer = {
  roleRepo,
  createRoleService: new CreateRoleService(roleRepo, businessContainer.businessRepo),
};
