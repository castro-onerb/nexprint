import { Role } from '../role.entity';

export abstract class RolesRepository {
  abstract save(role: Role): Promise<void>;
  abstract findById(id: string): Promise<Role | null>;
  abstract findAll(): Promise<Role[]>;
  abstract findByBusinessId(businessId: string): Promise<Role[]>;
}
