import { RoleRepository } from '@/domain/company/role/repositories/role.repository';
import { Role } from '@/domain/company/role/role.entity';

export class InMemoryRoleRepository implements RoleRepository {
  private roles: Role[] = [];

  async save(role: Role): Promise<void> {
    this.roles.push(role);
  }

  async findById(id: string): Promise<Role | null> {
    return this.roles.find((r) => r.id.toString() === id) || null;
  }

  async findAll(): Promise<Role[]> {
    return this.roles;
  }

  async findByBusinessId(businessId: string): Promise<Role[]> {
    return this.roles.filter((r) => r.businessId.toString() === businessId);
  }
}
