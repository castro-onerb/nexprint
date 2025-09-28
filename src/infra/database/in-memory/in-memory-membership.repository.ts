import { Membership } from '@/domain/company/membership/membership.entity';
import { MembershipRepository } from '@/domain/company/membership/repositories/membership.repository';

export class InMemoryMembershipRepository implements MembershipRepository {
  private items: Membership[] = [];

  async save(membership: Membership): Promise<void> {
    this.items.push(membership);
  }

  async findById(id: string): Promise<Membership | null> {
    return this.items.find((m) => m.id.toString() === id) || null;
  }

  async findByUserId(userId: string): Promise<Membership[]> {
    return this.items.filter((m) => m.userId.toString() === userId);
  }

  async findByBusinessId(businessId: string): Promise<Membership[]> {
    return this.items.filter((m) => m.businessId.toString() === businessId);
  }

  findAll(): Promise<Membership[]> {
    return Promise.resolve(this.items);
  }
}
