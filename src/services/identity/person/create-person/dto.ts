import { AddressProps } from '@/core/types/address';

export type CreatePersonDTO = {
  name: string;
  surname: string;
  cpf?: string;
  phone: string;
  address?: AddressProps;
};
