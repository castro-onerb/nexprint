import { PermissionId } from '@/core/permissions/permissions';

export type CreateRoleDTO = {
  businessId: string;
  name: string;
  description?: string;
  permissions?: PermissionId[];
  isDefault?: boolean;
};
