import { PermissionId } from '@/core/permissions/permissions';
import { UniqueID } from '@/core/value-objects/unique-id';

export type MembershipProps = {
  userId: UniqueID;
  businessId: UniqueID;
  roleIds: UniqueID[];
  permissions?: PermissionId[];
  deniedPermissions?: PermissionId[];
  status?: 'active' | 'invited' | 'removed';
};
