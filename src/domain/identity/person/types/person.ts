import { Address } from '@/core/value-objects/address';

export type PersonProps = {
  name: string;
  surname: string;
  cpf?: string;
  phone: string;
  address?: Address;
};
