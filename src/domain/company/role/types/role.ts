import { Slug } from '@/core/value-objects/slug';
import { UniqueID } from '@/core/value-objects/unique-id';

export type RoleProps = {
  businessId: UniqueID;
  name: string;
  description?: string;
  permissions: string[];
  isDefault?: boolean;
  createdAt?: Date;
  UpdatedAt?: Date;
};
