import { Membership } from '../membership.entity';

export abstract class MembershipRepository {
  abstract save(membership: Membership): Promise<void>;
  abstract findById(id: string): Promise<Membership | null>;
  abstract findByUserId(userId: string): Promise<Membership[]>;
  abstract findByBusinessId(businessId: string): Promise<Membership[]>;
}
