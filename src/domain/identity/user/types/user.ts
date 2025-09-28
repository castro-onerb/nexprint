import { Password } from '@/core/value-objects/password';
import { UniqueID } from '@/core/value-objects/unique-id';

export type UserProps = {
  personId: UniqueID;
  email: string;
  password: Password;
};
