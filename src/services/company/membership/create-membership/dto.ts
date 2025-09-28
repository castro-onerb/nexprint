import { PermissionId } from '@/core/permissions/permissions';

export type CreateMembershipDTO = {
  userId: string;
  businessId: string;
  roleIds?: string[];
  permissions?: PermissionId[];
  deniedPermissions?: PermissionId[];
  status?: 'active' | 'invited' | 'removed';
};
