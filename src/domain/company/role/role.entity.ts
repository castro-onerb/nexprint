import { Entity } from '@/core/entities/entity';
import { UniqueID } from '@/core/value-objects/unique-id';
import { RoleProps } from './types/role';
import { Slug } from '@/core/value-objects/slug';

export class Role extends Entity<RoleProps> {
  private _slug: Slug;

  private constructor(props: RoleProps, id?: UniqueID) {
    super(props, id);
    this._slug = Slug.create(props.name);
    this.props.permissions = props.permissions ?? [];
    this.props.isDefault = props.isDefault ?? false;
  }

  static create(props: RoleProps, id?: UniqueID) {
    return new Role(props, id);
  }

  get businessId() {
    return this.props.businessId;
  }

  get name() {
    return this.props.name;
  }

  get slug(): Slug {
    return this._slug;
  }

  get permissions(): string[] {
    return this.props.permissions ?? [];
  }

  get isDefault(): boolean {
    return this.props.isDefault ?? false;
  }

  setDefault() {
    this.props.isDefault = true;
  }

  unsetDefault() {
    this.props.isDefault = false;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  matchesSlug(slug: Slug): boolean {
    return this.slug.equals(slug);
  }

  updateName(name: string) {
    this.props.name = name;
    this._slug = Slug.create(name);
  }
}
