import { Membership } from '@/domain/identity/membership/membership.entity';
import { MembershipRepository } from '@/domain/identity/membership/repositories/membership.repository';

export class InMemoryMembershipRepository implements MembershipRepository {
  private memberships: Membership[] = [];

  async save(membership: Membership): Promise<void> {
    this.memberships.push(membership);
  }

  async findById(id: string): Promise<Membership | null> {
    return this.memberships.find((m) => m.id.toString() === id) || null;
  }

  async findByUserId(userId: string): Promise<Membership[]> {
    return this.memberships.filter((m) => m.userId.toString() === userId);
  }

  async findByBusinessId(businessId: string): Promise<Membership[]> {
    return this.memberships.filter((m) => m.businessId.toString() === businessId);
  }
}
