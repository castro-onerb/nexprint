import { randomUUID } from 'node:crypto';

export class UniqueID {
  private readonly _value: string;

  constructor(value?: string) {
    this._value = value ?? randomUUID();
  }

  toString(): string {
    return this._value;
  }

  toValue(): string {
    return this._value;
  }

  toEquals(id?: UniqueID): boolean {
    if (!id) {
      return false;
    }
    return this._value === id.toValue();
  }
}
