import { InMemoryBusinessRepository } from '@/infra/database/in-memory/in-memory-business.repository';
import { InMemoryRoleRepository } from '@/infra/database/in-memory/in-memory-role.repository';
import { CreateRoleService } from '@/services/company/role/create-role';

const roleRepo = new InMemoryRoleRepository();
const businessRepo = new InMemoryBusinessRepository();

export const roleContainer = {
  createRoleService: new CreateRoleService(roleRepo, businessRepo),
};
