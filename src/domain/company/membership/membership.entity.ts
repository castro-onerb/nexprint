import { UniqueID } from '@/core/value-objects/unique-id';
import { MembershipProps } from './types/membership';
import { Entity } from '@/core/entities/entity';
import { PermissionId } from '@/core/permissions/permissions';
import { Role } from '../../company/role/role.entity';

export class Membership extends Entity<MembershipProps> {
  private constructor(props: MembershipProps, id?: UniqueID) {
    super(props, id);
  }

  static create(props: MembershipProps, id?: UniqueID) {
    return new Membership(
      {
        ...props,
        status: props.status ?? 'active',
        permissions: props.permissions ?? [],
        deniedPermissions: props.deniedPermissions ?? [],
      },
      id,
    );
  }

  static createWithRoles(
    userId: UniqueID,
    businessId: UniqueID,
    roles: Role[],
    customPermissions: PermissionId[] = [],
    deniedPermissions: PermissionId[] = [],
    status: 'active' | 'invited' | 'removed' = 'active',
  ) {
    const aggregatedPermissions = roles.flatMap((r) => r.permissions);

    const finalPermissions = [
      ...new Set(aggregatedPermissions.filter((p) => !deniedPermissions.includes(p))),
    ].concat(customPermissions);

    return new Membership({
      userId,
      businessId,
      roleIds: roles.map((r) => r.id),
      permissions: finalPermissions,
      deniedPermissions,
      status,
    });
  }

  // getters
  get userId() {
    return this.props.userId;
  }
  get businessId() {
    return this.props.businessId;
  }
  get roleIds() {
    return this.props.roleIds;
  }
  get permissions() {
    return this.props.permissions ?? [];
  }
  get deniedPermissions() {
    return this.props.deniedPermissions ?? [];
  }

  // cálculo final
  get effectivePermissions(): PermissionId[] {
    const granted = new Set(this.permissions);
    this.deniedPermissions.forEach((p) => granted.delete(p));
    return [...granted];
  }

  // ações
  activate() {
    this.props.status = 'active';
  }
  invite() {
    this.props.status = 'invited';
  }
  remove() {
    this.props.status = 'removed';
  }

  grantPermission(permission: PermissionId) {
    if (!this.permissions.includes(permission)) {
      this.props.permissions = [...this.permissions, permission];
    }
  }

  revokePermission(permission: PermissionId) {
    this.props.permissions = this.permissions.filter((p) => p !== permission);
  }

  denyPermission(permission: PermissionId) {
    if (!this.deniedPermissions.includes(permission)) {
      this.props.deniedPermissions = [...this.deniedPermissions, permission];
    }
  }

  allowPermission(permission: PermissionId) {
    this.props.deniedPermissions = this.deniedPermissions.filter((p) => p !== permission);
  }

  syncPermissionsFromRole(permissions: PermissionId[]) {
    this.props.permissions = [...permissions];
  }
}
