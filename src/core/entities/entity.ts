import { UniqueID } from '../value-objects/unique-id';

export abstract class Entity<Props> {
  private _id: UniqueID;
  protected props: Props;

  get id(): UniqueID {
    return this._id;
  }

  constructor(props: Props, id?: UniqueID) {
    this._id = id ?? new UniqueID();
    this.props = props;
  }

  public equals(entity: Entity<Props>) {
    if (this === entity) {
      return true;
    }
    return this.id.toValue() === entity.id.toValue();
  }
}
