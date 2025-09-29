import { PermissionId } from './permissions';

export type Membership = {
  userId: string;
  businessId: string;
  roleId: string;
  permissions: PermissionId[];
};

export type UserContext = {
  id: string;
  isOwner?: boolean;
  memberships: Membership[];
};

export class PermissionResolver {
  static hasPermission(user: UserContext, permission: PermissionId, businessId?: string): boolean {
    if (user.isOwner) {
      return true;
    }

    if (!businessId) {
      return false;
    }

    const membership = user.memberships.find((m) => m.businessId === businessId);

    if (!membership) {
      return false;
    }

    return membership.permissions.includes(permission);
  }

  static listPermissions(user: UserContext, businessId?: string): PermissionId[] {
    if (user.isOwner) {
      return [...new Set(user.memberships.flatMap((m) => m.permissions)), 'system:full_access'];
    }

    if (!businessId) {
      return [];
    }

    const membership = user.memberships.find((m) => m.businessId === businessId);

    return membership?.permissions ?? [];
  }
}
