import { RolesRepository } from '@/domain/company/role/repositories/role.repository';
import { Role } from '@/domain/company/role/role.entity';

export class InMemoryRoleRepository implements RolesRepository {
  private items: Role[] = [];

  async save(role: Role): Promise<void> {
    this.items.push(role);
  }

  async findById(id: string): Promise<Role | null> {
    return this.items.find((r) => r.id.toString() === id) || null;
  }

  async findByBusinessId(businessId: string): Promise<Role[]> {
    return this.items.filter((r) => r.businessId.toString() === businessId);
  }

  async findAll(): Promise<Role[]> {
    return this.items;
  }
}
